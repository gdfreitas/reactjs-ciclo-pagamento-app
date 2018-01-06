import React, {Component} from 'react'

class TabHeader extends Component {
   render() {
      return (
         <li>
            <a href="javascript:;" 
               data-toggle="tab"
               data-target={this.props.target}>
                  <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
               </a> {/* alterar o fa- para não fixar o uso do font awesome somente, permitir outras libs */}
         </li>
      )
   }
}

export default TabHeader