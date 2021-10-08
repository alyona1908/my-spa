import React, { useState } from 'react';
import './Login.css';
import {
  TextField, Box, Button,
} from '@mui/material';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Login({ setAuthent }) {
  const [value, setValue] = useState('');
  const [valuePass, setValuePass] = useState('');

  const returnlogKey = JSON.parse(localStorage.getItem('logKey'));
  const data = {
    login: value,
    password: valuePass,
  };
  const history = useHistory();
  // eslint-disable-next-line consistent-return
  function verification() {
    if (JSON.stringify(data) === JSON.stringify(returnlogKey)) {
      localStorage.setItem('authKey', true);
      setAuthent(true);
      history.push('/users');
    } else {
      history.push('/error');
    }
  }
  return (
    <Box
      className="boxLog"
      component="form"
      xs={{
        width: 300,
        height: 300,
        textAlign: 'centre',
      }}
    >
      <TextField
        className="fieldLog"
        required
        id="outlined-input"
        label="Login"
        margin="normal"
        size="small"
        onChange={e => setValue(e.target.value)}
      />
      <TextField
        className="fieldLog"
        required
        margin="normal"
        id="outlined-password-input"
        label="Password"
        type="password"
        size="small"
        autoComplete="current-password"
        onChange={event => setValuePass(event.target.value)}
      />
      <Button onClick={() => verification()} variant="filled" color="success"> Login </Button>
    </Box>
  );
}

export default Login;
