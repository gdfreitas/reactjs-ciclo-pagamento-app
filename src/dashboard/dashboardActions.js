import axios from 'axios'

import CONSTANTS from '../consts'

export function getSummary() {
   const request = axios.get(`${CONSTANTS.API_URL}/ciclos-pagamentos/summary`) // TODO: adicionar promise middleware dps
   return {
      type: 'BILLING_SUMMARY_FETCHED',
      payload: request
   }
}