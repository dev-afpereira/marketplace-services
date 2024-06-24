import React, { useState, useContext } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import AuthContext from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    authContext.login({ email, password });
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
