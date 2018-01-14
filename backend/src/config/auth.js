const jwt = require('jsonwebtoken')
const env = require('../../.env')

const HTTP_FORBIDDEN = 403

// filtro de autenticação genérico para aplicação
module.exports = (req, res, next) => {

   // CORS preflight request
   if (req.method === 'OPTIONS') {
      next()
   } else {

      // token pode vir no body, queryParams ou headers
      const token = req.body.token || req.query.token || req.headers['authorization']

      if (!token) {
         return res
            .status(HTTP_FORBIDDEN)
            .send({ errors: ['No token provided.'] })
      }

      // verifica se o jwt token foi criado com base no .env secret da aplicação
      jwt.verify(token, env.authSecret, function (err, decoded) {
         if (err) {
            return res
               .status(HTTP_FORBIDDEN)
               .send({
                  errors: ['Failed to authenticate token.']
               })
         } else {
            req.decoded = decoded
            next()
         }
      })

   }

}
