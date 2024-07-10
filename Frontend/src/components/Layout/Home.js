import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Bem-vindo ao Marketplace de Serviços Locais
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Encontre os melhores serviços na sua região
      </Typography>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="/register">
            Registrar-se
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" component={Link} to="/login">
            Login
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" component={Link} to="/services">
            Ver Serviços
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
