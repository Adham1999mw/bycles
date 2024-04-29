import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import React from 'react'




export default function BaseTextInput({
  onClickEndAdornment,
  endAdornmentText,
  onChange,
  ...rest
}) {
  return (
    <TextField
      {...rest}
      id="outlined-basic"
      variant="outlined"
      onChange={(event) => onChange(event.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {endAdornmentText && (
              <span onClick={onClickEndAdornment}>{endAdornmentText}</span>
            )}
          </InputAdornment>
        ),
      }}
    />
  )
}
