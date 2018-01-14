module.exports = (req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*') // permite todos as origems
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE') // permite esses métodos
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization') // permite esses headers
   next()
}