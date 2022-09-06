import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderTextField from './TextField';

export function ManageForm(props) {
    const {handleSubmit} = props;
    console.log('manage prop',props.initialValues)  
  return (
        <form onSubmit={handleSubmit} >
            <Field name={ !props?.answer ? 'number' : 'answer'} component={renderTextField} placeholder="THe " />
        </form>
  )
}

export default reduxForm({
    form : 'answer',
    enableReinitialize:true
})(ManageForm);

