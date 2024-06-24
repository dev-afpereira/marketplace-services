import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './context/AuthState';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ServiceList from './components/Services/ServiceList';
import Home from './components/Layout/Home';
import Navbar from './components/Layout/Navbar';
import { CssBaseline, Container } from '@mui/material';

const App = () => {
  return (
    <AuthState>
      <Router>
        <CssBaseline />
        <Navbar />
        <Container style={{ marginTop: '20px' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/services" component={ServiceList} />
          </Switch>
        </Container>
      </Router>
    </AuthState>
  );
};

export default App;
