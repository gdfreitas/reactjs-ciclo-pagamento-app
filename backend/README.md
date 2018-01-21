# BACKEND

## Resources

Recursos disponíveis para consulta, criação, alteração e remoção de ciclos de pagamento. Consulta de quantidade de ciclos para paginação e consulta de sumário para os widgets de dashboard.

`GET`      @ /api/billingCycles <br />
`GET`      @ /api/billingCycles/{id} <br />
`POST`     @ /api/billingCycles <br />
`PUT`      @ /api/billingCycles/{id} <br />
`DELETE`   @ /api/billingCycles/{id} <br />
`GET`      @ /api/billingCycles/count <br />
`GET`      @ /api/billingCycles/summary <br />

## Dependências

[MongoDB](https://docs.mongodb.com/) - base de dados NoSQL, alta performance, sem esquemas e orientado à documentos. <br />
[NodeJS](https://nodejs.org/en/docs/) - interpretador de código javascript no lado servidor.<br />
[Express](http://expressjs.com/en/4x/api.html) - servidor web não organizado e minimalista para NodeJS

[express-query-init](https://www.npmjs.com/package/express-query-int) - middleware auxiliar para fazer o parse de query parameters numéricos

[mongoose](http://mongoosejs.com/docs/guide.html) - api de mapeamento dos objetos javascript para documentos (ODM - Object Data Mapping) e sistemas de conversão de tipos, validaÇão, criação de consultas e hooks para lógicas de negócio.

[mongoose-paginate](https://github.com/edwardhotchkiss/mongoose-paginate) - auxiliar para montar paginações em consultas ao banco de dados.

[noderestful](https://github.com/baugarten/node-restful) - biblioteca para auxiliar na criação de rotas para recursos no padrão REST no servidor `express`.

[Lodash](https://lodash.com/docs/) - biblioteca contendo inúmeros métodos que auxiliam na manipulação de arrays, objetos, strings, etc em javascript.

[body-parser](https://github.com/expressjs/body-parser) - middleware para fazer o parse do body das requests.

[pm2](http://pm2.keymetrics.io/) - gerenciador de processos para aplicações NodeJ. Gerenciamento de memória, de cores, quedas na aplicação, etc.


## Configuração
### Criar arquivo `.env` com a secret key

```
module.exports = {
  authSecret: 'skjdhf6$$%dojkhfˆ(sdkjhf'
}
```

## Extras

[JsonWebToken implementation for node.js](https://github.com/auth0/node-jsonwebtoken)

[What are requirements for HMAC secret key?](https://security.stackexchange.com/questions/95972/what-are-requirements-for-hmac-secret-key)

[Conhecendo o JWT na teoria e na prática](https://imasters.com.br/desenvolvimento/json-web-token-conhecendo-o-jwt-na-teoria-e-na-pratica/?trace=1519021197&source=single)

[Introdução ao mongoose](http://nodebr.com/nodejs-e-mongodb-introducao-ao-mongoose/)