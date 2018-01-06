import { combineReducers } from 'redux'

const rootReducer = combineReducers({
   dashboard: () => ({
      summary: { credit: 100, debt: 50 } // fixo posteriormente virá do backend
   })
})

export default rootReducer