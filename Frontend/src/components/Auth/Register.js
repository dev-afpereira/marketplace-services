import React, { useState, useContext } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import AuthContext from '../../context/AuthContext';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = user;
  const authContext = useContext(AuthContext);

  const onChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    authContext.register({
      name,
      email,
      password,
    });
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Name"
          type="text"
          fullWidth
          margin="normal"
          variant="outlined"
          name="name"
          value={name}
          onChange={onChange}
          required
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          variant="outlined"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
