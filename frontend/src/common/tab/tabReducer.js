const INITIAL_STATE = { selected: '' }

export default (state = INITIAL_STATE, action) => {
   switch (action) {
      case 'TAB_SELECTED':
         return { ...state, selected: action.payload }
      default:
         return state
   }
}