# Aplicação react-redux

Construído uma aplicação frontend para interagir com uma api de ciclos de pagamentos. Praticando aprendizagem com as tecnologias do React, Redux, Webpack, entre outras.

## Requisitos

Possuir uma [Api de Ciclos de Pagamentos](https://github.com/gdfreitas/ciclo-pagamento-api) rodando;

## Rodando aplicação

`npm run prod` gerar os arquivos estáticos na pasta `./public`;

## Variáveis de ambientes

`"OAPI_URL"`: define o endereço da api pública. (padrão: `http://localhost/oapi`)  
`"API_URL"`: define o endereço da api autenticada  (padrão: `http://localhost/api`)  

## Recursos utilizados

[webpack](https://webpack.js.org/concepts/) - bundler de módulos estáticos para aplicações javascript.  
[webpack-dev-server](https://github.com/webpack/webpack-dev-server) - servidor de desenvolvimento para ser utilizado em conjunto com webpack provendo live-reloading e muitas outras funcionalidades.  
[axios](https://github.com/axios/axios) - promise based HTTP client para browsers e NodeJS
[react](https://reactjs.org/docs/) - biblioteca para criar interfaces, permite criar componentes através de sua árvore de múltiplos componentes reutilizáveis.  
[react-dom](https://reactjs.org/docs/react-dom.html) - provê métodos para manipulação do DOM.  
[react-router](https://reacttraining.com/react-router/web/guides/philosophy) - auxiliar para composição de rotas de aplicações react.  
[redux](https://github.com/reactjs/redux) - biblioteca para controle de estado de toda a aplicação em um único objeto chamado de store, sendo os estados imutáveis e mudanças aceitas somente por funções puras.  [react-redux](https://github.com/reactjs/react-redux) - integra o redux com o react.  
[redux-form](https://redux-form.com/7.2.1/docs/api/) - auxiliar para manipulação de estados com formulários.  
[redux-multi](https://github.com/ashaffer/redux-multi) - auxiliar para disparar multiplas `actions` partindo de um `action creator`  
[redux-promise](https://github.com/acdlite/redux-promise) - middleware para aguardar a interpretações de promises em actions.  
[redux-thunk](https://github.com/gaearon/redux-thunk) - middleware para permitir retornar funções em action creators.  
[react-redux-toastr](https://github.com/diegoddox/react-redux-toastr) - implementação da biblioteca `toastr` para ser utilizada em conjunto com o redux.  
[babel-core](https://babeljs.io/docs/core-packages/) - transpiler de sintáxes (jsx), ES6, ES7, etc para javascript suportado nos browsers atuais.  
[babel-loader](https://github.com/babel/babel-loader) - loader do babel para o webpack  
[babel-plugin-react-html-attrs](https://github.com/insin/babel-plugin-react-html-attrs) - auxiliar para permitir escrita de atributos HTML dentro de templates JSX.  
[babel-plugin-transform-object-rest-spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/) - plugin para transformar os atributos resultantes do uso do operador spread/rest `...` em objetos literais.  
[babel-preset-react](https://babeljs.io/docs/plugins/preset-react/) - plugin para transformar os arquivos JSX.  
[babel-preset-es2015](https://babeljs.io/docs/plugins/preset-es2015/) - plugin para compilar ES6 (ES2015) para ES5  
[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) - plugin para extrair textos de bundles de css  
[css-loader](https://github.com/webpack-contrib/css-loader) - loader para arquivos css. interpreta `@import` e `url()`  
[style-loader](https://github.com/webpack-contrib/style-loader) - loader para adicionar estilos css ao DOM. Injeta uma tag `<style>`  
[file-loader](https://github.com/webpack-contrib/file-loader) - loader para imagens, fonts, etc. Interpreta o `require` e retorna a URL publica.  
[admin-lte](https://adminlte.io/docs/2.4/layout) - tema opensource para dashboards, utiliza bootstrap 3 e provê bastante componentes para utilização no layout.  
[font-awesome](http://fontawesome.io/icons/) - biblioteca de ícones  
[ionicons](http://ionicons.com/) - biblioteca de ícones  
[Lodash](https://lodash.com/docs/) - biblioteca contendo inúmeros métodos que auxiliam na manipulação de arrays, objetos, strings, etc em javascript.  

## Referências

[Curso React Redux - Fundamentos @Udemy](https://www.udemy.com/react-redux-pt)  
[Front End Workshops - Redux Advanced @ Slideshare](https://pt.slideshare.net/visualengin/workshop-22-reactredux-m)  
[Ciclo de vida do redux com middlewares](https://image.slidesharecdn.com/reactjs-reduxadvanced-160718135927/95/workshop-22-reactjs-redux-advanced-15-638.jpg?cb=1468850596)  