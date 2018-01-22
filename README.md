# Aplicação react-redux

Construindo uma aplicação react integrada com redux para aprendizagem.

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
[Express](http://expressjs.com/en/4x/api.html) - servidor web não organizado e minimalista para NodeJS<br />
[express-query-init](https://www.npmjs.com/package/express-query-int) - middleware auxiliar para fazer o parse de query parameters numéricos<br />
[mongoose](http://mongoosejs.com/docs/guide.html) - api de mapeamento dos objetos javascript para documentos (ODM - Object Data Mapping) e sistemas de conversão de tipos, validaÇão, criação de consultas e hooks para lógicas de negócio.<br />
[mongoose-paginate](https://github.com/edwardhotchkiss/mongoose-paginate) - auxiliar para montar paginações em consultas ao banco de dados.<br />
[noderestful](https://github.com/baugarten/node-restful) - biblioteca para auxiliar na criação de rotas para recursos no padrão REST no servidor `express`.<br />
[Lodash](https://lodash.com/docs/) - biblioteca contendo inúmeros métodos que auxiliam na manipulação de arrays, objetos, strings, etc em javascript.<br />
[body-parser](https://github.com/expressjs/body-parser) - middleware para fazer o parse do body das requests.<br />
[pm2](http://pm2.keymetrics.io/) - gerenciador de processos para aplicações NodeJ. Gerenciamento de memória, de cores, quedas na aplicação, etc.<br />

## Configuração
### Criar arquivo `.env` com a secret key

```
module.exports = {
  authSecret: 'chaveSecretaMuitoLoucaCheiaDeCaracteresLerDocumentacao'
}
```

# FRONTEND

## Configuração 
#### apesar de ter sido commitado no repositório [não deveria], aqui está a configuração
### Criar arquivo `index.html` na pasta `./src/public/`

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>My Money App</title>
   <link rel="stylesheet" href="app.css">
</head>
<body class="skin-blue fixed sidebar-mini">
   <div id="app" class="wrapper"></div>
   <script src="app.js"></script>
</body>
</html>
```

# Dependências

[webpack](https://webpack.js.org/concepts/) - bundler de módulos estáticos para aplicações javascript. <br/>
[webpack-dev-server](https://github.com/webpack/webpack-dev-server) - servidor de desenvolvimento para ser utilizado em conjunto com webpack provendo live-reloading e muitas outras funcionalidades.<br/>
[react](https://reactjs.org/docs/) - biblioteca para criar interfaces, permite criar componentes através de sua árvore de múltiplos componentes reutilizáveis.<br />
[react-dom](https://reactjs.org/docs/react-dom.html) - provê métodos para manipulação do DOM.<br />
[react-router](https://reacttraining.com/react-router/web/guides/philosophy) - auxiliar para composição de rotas de aplicações react.<br />
[redux](https://github.com/reactjs/redux) - biblioteca para controle de estado de toda a aplicação em um único objeto chamado de store, sendo os estados imutáveis e mudanças aceitas somente por funções puras.<br />
[react-redux](https://github.com/reactjs/react-redux) - integra o redux com o react.<br />
[redux-form](https://redux-form.com/7.2.1/docs/api/) - auxiliar para manipulação de estados com formulários.<br />
[redux-multi](https://github.com/ashaffer/redux-multi) - auxiliar para disparar multiplas `actions` partindo de um `action creator`<br />
[redux-promise](https://github.com/acdlite/redux-promise) - middleware para aguardar a interpretações de promises em actions.<br />
[redux-thunk](https://github.com/gaearon/redux-thunk) - middleware para permitir retornar funções em action creators.<br />
[react-redux-toastr](https://github.com/diegoddox/react-redux-toastr) - implementação da biblioteca `toastr` para ser utilizada em conjunto com o redux.<br />
[babel-core](https://babeljs.io/docs/core-packages/) - transpiler de sintáxes (jsx), ES6, ES7, etc para javascript suportado nos browsers atuais.<br />
[babel-loader](https://github.com/babel/babel-loader) - loader do babel para o webpack<br />
[babel-plugin-react-html-attrs](https://github.com/insin/babel-plugin-react-html-attrs) - auxiliar para permitir escrita de atributos HTML dentro de templates JSX.<br />
[babel-plugin-transform-object-rest-spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/) - plugin para transformar os atributos resultantes do uso do operador spread/rest `...` em objetos literais.<br />
[babel-preset-react](https://babeljs.io/docs/plugins/preset-react/) - plugin para transformar os arquivos JSX.<br />
[babel-preset-es2015](https://babeljs.io/docs/plugins/preset-es2015/) - plugin para compilar ES6 (ES2015) para ES5<br />
[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) - plugin para extrair textos de bundles de css<br />
[css-loader](https://github.com/webpack-contrib/css-loader) - loader para arquivos css. interpreta `@import` e `url()`<br />
[style-loader](https://github.com/webpack-contrib/style-loader) - loader para adicionar estilos css ao DOM. Injeta uma tag `<style>`<br />
[file-loader](https://github.com/webpack-contrib/file-loader) - loader para imagens, fonts, etc. Interpreta o `require` e retorna a URL publica.<br />
[admin-lte](https://adminlte.io/docs/2.4/layout) - tema opensource para dashboards, utiliza bootstrap 3 e provê bastante componentes para utilização no layout.<br />
[font-awesome](http://fontawesome.io/icons/) - biblioteca de ícones<br />
[ionicons](http://ionicons.com/) - biblioteca de ícones<br />
[Lodash](https://lodash.com/docs/) - biblioteca contendo inúmeros métodos que auxiliam na manipulação de arrays, objetos, strings, etc em javascript.<br />

# Rodando a aplicação
`mongod` inicializar o banco de dados mongoDB

`./backend npm run prod && pm2 monit` inicializar api de backend e abrir monitoração realtime do pm2

`./frontend npm run prod` gerar os arquivos estáticos na pasta `./public` 

# Extras

[JsonWebToken implementation for node.js](https://github.com/auth0/node-jsonwebtoken)<br />
[What are requirements for HMAC secret key?](https://security.stackexchange.com/questions/95972/what-are-requirements-for-hmac-secret-key)<br />
[Conhecendo o JWT na teoria e na prática](https://imasters.com.br/desenvolvimento/json-web-token-conhecendo-o-jwt-na-teoria-e-na-pratica/?trace=1519021197&source=single)<br />
[Introdução ao mongoose](http://nodebr.com/nodejs-e-mongodb-introducao-ao-mongoose/)<br />
[Curso React Redux - Fundamentos @Udemy](https://www.udemy.com/react-redux-pt)<br />
[Front End Workshops - Redux Advanced @ Slideshare](https://pt.slideshare.net/visualengin/workshop-22-reactredux-m)<br />
[Ciclo de vida do redux com middlewares](https://image.slidesharecdn.com/reactjs-reduxadvanced-160718135927/95/workshop-22-reactjs-redux-advanced-15-638.jpg?cb=1468850596)<br />