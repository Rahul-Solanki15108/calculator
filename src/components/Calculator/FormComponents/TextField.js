import { TextField } from '@mui/material'
import React from 'react'

export default function renderTextField({
    input,
    lable,
    meta: { touched, invalid, error, waring }
}) {
    return (
        <TextField
        name={lable}
        inputProps={{ style: { textAlign: 'right' } }}
            fullWidth
            {...input}
        />
    )
}

