import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {connect} from "react-redux";

import NavAuth from "./NavAuth.js";

import {  Menu } from 'semantic-ui-react';


function NavBar(props) {
  

  return (
    <Menu>
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