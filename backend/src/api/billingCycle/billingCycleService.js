const _ = require('lodash')
const BillingCycle = require('./billingCycle')

const errorHandler = require('../common/errorHandler')

// define os métodos http pelo node-restful
BillingCycle.methods(['get', 'post', 'put', 'delete']) // 'patch' não é suportado por padrão, porém há plugins que implementam

// configurações de atualizacao
BillingCycle.updateOptions({
   new: true,  // toda vez que atualiza um objeto retornar o objeto novo. padrão retorna o antigo
   runValidators: true  // rodar as validações também nos updates. padrão não executa nenuhma validação
})

// interceptar as requisicoes após método para tratar as mensagens de erro
BillingCycle
   .after('post', errorHandler)
   .after('put', errorHandler)

// rota customizada para contador
BillingCycle.route('count', (req, res, next) => {
   BillingCycle.count((error, value) => {
      if (error) {
         res.status(INTERNAL_SERVER_ERROR_STATUS).json({ errors: [error] })
      } else {
         res.json({ value })
      }
   })
})

BillingCycle.route('summary', (req, res, next) => {
   // fluxo de agregação  (pipeline aggregation) 
   // docs: https://docs.mongodb.com/manual/reference/operator/aggregation
   BillingCycle.aggregate(
      {
         $project: { // projeção
            credit: { $sum: '$credits.value' }, // credit (soma do atributo value da coleção $credits)
            debt: { $sum: '$debts.value' }// debt (soma do atributo value da coleção $debts)
         }
      },
      {
         $group: {
            _id: null, // api do mongo exige que tenha o _id
            credit: { $sum: '$credit' }, // agrupa todos os credit que totalizaram na projeção
            debt: { $sum: '$debt' } // agrupa todos os debt que totalizaram na projeção
         }
      },
      {
         $project: { // 0 - remover; 1 manter na projeção;
            _id: 0,
            credit: 1,
            debt: 1
         }
      },
      (error, result) => {
         if (error) {
            res.status(INTERNAL_SERVER_ERROR_STATUS).json({ errors: [error] })
         } else {
            res.json(result[0] || { credit: 0, debt: 0 })
            // função do lodash _.defaults define valores padrões para caso os valores das propriedades estejam null, undefined
            // res.json(_.defaults(result[0], { credit: 0, debt: 0 }))
         }
      })
})

module.exports = BillingCycle