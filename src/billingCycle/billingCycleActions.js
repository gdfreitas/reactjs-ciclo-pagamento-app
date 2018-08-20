import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

import CONSTANTS from '../consts'

const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
   const request = axios.get(`${CONSTANTS.API_URL}/ciclos-pagamentos`)
   return {
      type: 'BILLING_CYCLES_FETCHED',
      payload: request
   }
}

export function create(values) {
   return _submit(values, 'post')
}

export function update(values) {
   return _submit(values, 'put')
}

export function remove(values) {
   return _submit(values, 'delete')
}

function _submit(values, method) {
   return dispatch => {
      const id = values._id ? values._id : ''
      axios[method](`${CONSTANTS.API_URL}/ciclos-pagamentos/${id}`, values)
         .then(resp => {
            toastr.success('Sucesso!', 'Operação realizada com sucesso.')
            dispatch([
               init()
            ])
         })
         .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
         })
   }
}

export function showUpdate(billingCycle) {
   return [ 
       showTabs('tabUpdate'),
       selectTab('tabUpdate'),
       initialize('billingCycleForm', billingCycle)
   ]
}

export function showDelete(billingCycle) {
   return [ 
       showTabs('tabDelete'),
       selectTab('tabDelete'),
       initialize('billingCycleForm', billingCycle)
   ]
}

export function init() {
   return [
       showTabs('tabList', 'tabCreate'),
       selectTab('tabList'),
       getList(),
       initialize('billingCycleForm', INITIAL_VALUES)
   ]
}

// FIXME: refatorar os métodos acima devido ao bug do cancelar
// function _showAndSelectTabs(initializeData = INITIAL_VALUES, tabToSelect, ...tabsToShow) {
//    return [
//       initialize('billingCycleForm', initializeData),
//       selectTab(tabToSelect),
//       showTabs(...tabsToShow)
//    ]
// }