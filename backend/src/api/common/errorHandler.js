const _ = require('lodash')

const INTERNAL_SERVER_ERROR_STATUS = 500

module.exports = (req, res, next) => {
   const bundle = res.locals.bundle

   if (bundle.errors) {
      let errors = parseErrors(bundle.errors)
      res.status(INTERNAL_SERVER_ERROR_STATUS).json({ errors })
   } else {
      next()
   }
}

function parseErrors(bundleErrors) {
   const errors = []
   _.forIn(bundleErrors, error => errors.push(error.message))
   return errors
}