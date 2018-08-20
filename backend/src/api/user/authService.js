const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../../.env')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const HTTP_BAD_REQUEST = 400
const HTTP_OK = 200

// responde com as mensagens de erros
const notifyErrorsDatabase = (res, errorMessages) => {
   const errors = []

   _.forIn(errorMessages.errors, error => errors.push(error.message))

   return res
      .status(HTTP_BAD_REQUEST)
      .json({ errors })
}

// efetua login
const login = (req, res, next) => {
   const email = req.body.email || ''
   const password = req.body.password || ''

   User.findOne({ email }, (err, user) => {

      // se houver algum erro do banco, responder com as mensagens de erro
      if (err) {
         return notifyErrorsDatabase(res, err)
      }

      // se achou um usuário, comparar os passwords
      if (user && bcrypt.compareSync(password, user.password)) {
         const token = jwt.sign(user, env.authSecret, { expiresIn: '1 day' }) // gera um token com o .env authSecret de 1 day
         const { name, email } = user
         res.json({ name, email, token }) // responde com nome, email e token
      } else {
         // se não responde um HTTP_BAD_REQUEST com usuário e senha inválido
         return res
            .status(HTTP_BAD_REQUEST)
            .send({
               errors: ['Usuário ou senha inválidos']
            })
      }
   })
}

// função para validar o token do usuário
const validateToken = (req, res, next) => {
   const token = req.body.token || ''
   jwt.verify(token, env.authSecret, function (err, decoded) {
      return res
         .status(HTTP_OK)
         .send({ valid: !err })
   })
}

// cadastro
const signup = (req, res, next) => {
   const name = req.body.name || ''
   const email = req.body.email || ''
   const password = req.body.password || ''
   const confirmPassword = req.body.confirm_password || ''

   // tem que bater com o regex de e-mail
   if (!email.match(emailRegex)) {
      return res
         .status(HTTP_BAD_REQUEST)
         .send({ errors: ['O e-mail informado está inválido'] })
   }

   // tem que bater com regex do password
   if (!password.match(passwordRegex)) {
      return res
         .status(HTTP_BAD_REQUEST)
         .send({
            errors: ['A senha precisar ter: uma letra maiúscula, uma letra minúscula, um número, uma caractere especial(@#$ %) e tamanho entre 6 - 20.']
         })
   }

   const salt = bcrypt.genSaltSync() // "sal" auxilia geração do hash
   const passwordHash = bcrypt.hashSync(password, salt)

   // verifica se os hashs da senha bate com a confirmação
   if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
      return res
         .status(HTTP_BAD_REQUEST)
         .send({
            errors: ['As senhas não conferem.']
         })
   }

   // verifica se já existe este usuário no banco pelo e-mail
   User.findOne({ email }, (err, user) => {

      // caso ocorra algum erro
      if (err) {
         return notifyErrorsDatabase(res, err)
      }

      // se já existe, retorna usuário já cadastrado
      if (user) {
         return res
            .status(HTTP_BAD_REQUEST)
            .send({
               errors: ['Usuário já cadastrado.']
            })
      } else {
         // cria novo usuário
         const newUser = new User({ name, email, password: passwordHash })
         newUser.save(err => {
            if (err) {
               return notifyErrorsDatabase(res, err)
            } else {
               login(req, res, next)
            }
         })
      }
   })
}

module.exports = { login, signup, validateToken }