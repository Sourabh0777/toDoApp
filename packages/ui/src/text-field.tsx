"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ setInputValueHandler,inputValue }: any) {
  const handleChangeValueHandler = (e: any) => {
    setInputValueHandler(e.target.value)
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => handleChangeValueHandler(e)} value={inputValue}/>

    </Box>
  );
}