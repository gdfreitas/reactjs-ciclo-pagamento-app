const express = require('express')
const auth = require('./auth')

// instância do server deve vir por parâmetro (server.js)
module.exports = (server) => {

    // ROTAS PROTEGIDAS por JWT
    const protectedApi = express.Router()
    server.use('/api', protectedApi)
    
    // utiliza o filtro de autenticação
    protectedApi.use(auth) 

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectedApi, '/billingCycles')

    // ROTAS PÚBLICAS
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)

}