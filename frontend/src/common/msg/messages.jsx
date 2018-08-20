import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.css'

export default props => (
   <ReduxToastr
      timeout={4000}
      newestOnTop={false}
      preventDuplicates={true}
      /* position='top-right' */
      position='bottom-left'
      transitionIn='fadeIn'
      transitionOut='fadeOut'
      progressBar
   />
)