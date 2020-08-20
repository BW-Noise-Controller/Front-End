import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";

import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import Login from './components/Login';
import Home from './components/Home';
import ScoreList from "./components/ScoresList";
import Classes from "./components/classes/Classes";
import ClassSignUp from './components/ClassSignUp';
import Settings from './components/settings/Settings';
import AnimalPage from './components/AnimalPage';
import NavBar from "./components/navbar/NavBar.js";

import styled from "styled-components";
import { Container } from 'semantic-ui-react';


const ContStyled = styled.div`
  padding: 2rem;

  @media only screen and (max-width: 768px){
    padding: 2rem .4rem;
    
  }
`;

function App() {
  return (
    

    <ContStyled as={Container}>

    <Router>

      <NavBar/>

      <Switch> 

        {/* <Route 
          exact
          path='/'
          component={props => <AnimalPage {...props} />}
        /> */}

        <Route
          exact
          path="/signup"
          component={props => <Signup {...props} />}
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

        <PrivateRoute
          exact
          path='/classform'
          component={props => <ClassSignUp {...props} />}
        />

        <PrivateRoute
          exact
          path='/classes/:className'
          component={props => <ClassSignUp {...props}/>}
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
          path='/:className/scores'
          component={props => <ScoreList {...props} />}
        />
        
        <PrivateRoute
          exact
          path='/classes'
          component={props => <Classes {...props} />}
        />

        <Route path="*">
          <div>Lost? Where are you?</div>
        </Route>

      </Switch>
      
    </Router>
    </ContStyled>
    
  );
}

export default App;