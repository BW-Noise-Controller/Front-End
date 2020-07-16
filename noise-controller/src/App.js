import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";

import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import Login from './components/Login';
import Home from './components/Home';
import ScoreCard from './components/ScoreCard';
import ClassSignUp from './components/ClassSignUp';
import Settings from './components/Settings';
import AnimalPage from './components/AnimalPage';
import Nav from "./components/Nav.js";

import styled from "styled-components";
import { Container } from 'semantic-ui-react';


const ContStyled = styled.div`
  padding: 2rem;
`;

function App() {
  return (
    

    <ContStyled as={Container} textAlign="center" fluid>

    <Router>

      
      <Nav/>

      <Switch> 
        <Route 
          exact
          path='/'
          component={props => <AnimalPage {...props} />}
        />

        <Route
          exact
          path="/login"
          component={props => <Login {...props} />}
        /> 

        <Route
          exact
          path="/logout"
          component={props => <Logout {...props} />}
        />

        <Route
          exact
          path='/classform'
          component={props => <ClassSignUp {...props} />}
        />

        <PrivateRoute
          exact
          path="/home"
          component={props => <Home {...props} />}
        />

        <PrivateRoute
          exact
          path='/settings'
          component={props => <Settings {...props} />}
        />

        <PrivateRoute
          exact
          path='/scores'
          component={props => <ScoreCard {...props} />}
        />


      </Switch>
      
    </Router>
    </ContStyled>
    
  );
}

export default App;