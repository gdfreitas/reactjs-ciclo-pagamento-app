import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billingCycleActions'
import LabelInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {

   render() {
      const { handleSubmit } = this.props

      return (
         <form role="form" onSubmit={handleSubmit}>
            <div className="box-body">
               <Field name="name" component={LabelInput} label="Nome" cols="12 4" placeholder="Informe o nome" />
               <Field name="month" component={LabelInput} label="Mês" cols="12 4" placeholder="Informe o mês" />
               <Field name="year" component={LabelInput} label="Ano" cols="12 4" placeholder="Informe o ano" />
            </div>
            <div className="box-footer">
               <button type="submit" className="btn btn-primary">Salvar</button>
               <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
            </div>
         </form>
      )
   }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycleForm)