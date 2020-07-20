import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

import NavAuth from "./NavAuth.js";

import {  Menu } from 'semantic-ui-react';
import styled from "styled-components";

const MenuStyled = styled.div`
margin-bottom: 6rem!important;
@media only screen and (max-width: 767px){
  margin-bottom: 3rem!important
}
`;


function NavBar(props) {
  

  return (
    <Menu as={MenuStyled}>
      <Menu.Item key='home'
        name="Lets Play"
        as = {Link} exact to="/"
      >
        
      </Menu.Item>

      <NavAuth/>
      
    </Menu>
  );
}

const mapStatetoProps = state=>({
  account: state.accountReducer,
  classes: state.classReducer.classes,
  selectedClass: state.classReducer.selectedClass
})
export default connect(mapStatetoProps,{})(NavBar);