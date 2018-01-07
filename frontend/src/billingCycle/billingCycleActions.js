import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

const INITIAL_VALUES = {

}

export function getList() {
   const request = axios.get(`${BASE_URL}/billingCycles`)
   return {
      type: 'BILLING_CYCLES_FETCHED',
      payload: request
   }
}

export function create(values) {
   return dispatch => {
      axios.post(`${BASE_URL}/billingCycles`, values)
         .then(resp => {
            toastr.success('Sucesso!', 'Operação realizada com sucesso.')
            dispatch([
               _showAndSelectTabs()
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

export function init() {
   return [ // TODO: refatorar exportar função para fazer este código abaixo, pode ser chamado no create
      _showAndSelectTabs(null, 'tabList', 'tabList', 'tabCreate'),
      getList(),
   ]
}

function _showAndSelectTabs(initializeData = INITIAL_VALUES, tabToSelect, ...tabsToShow) {
   return [
      initialize('billingCycleForm', initializeData),
      selectTab(tabToSelect),
      showTabs(...tabsToShow)
   ]
}