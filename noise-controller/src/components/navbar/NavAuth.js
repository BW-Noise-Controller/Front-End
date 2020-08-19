import React from "react";
import {connect} from "react-redux" 
import { Link } from 'react-router-dom';

import NavSettings from "./NavSettings.js";
import {selectCurrentClass} from "../../actions/classesAction";

import {  Menu, Dropdown, Icon } from 'semantic-ui-react';

function NavAuth(props) {
  const [isMobile, setMobile] = React.useState(getWindowWidth())
 

  // React.useEffect(()=>{

  //   setSelectedClass(props.selectedClass.className)

  // },[props.selectedClass])
  
  React.useEffect(()=>{
    
    function handleResize() {
      setMobile(getWindowWidth());
      
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
  },[])

  function getWindowWidth(){
    const { innerWidth} = window;
    return innerWidth  < 768 ? true : false
    
  }

  function changeClass(cls) {
    console.log("class picked",cls)
    //action for currently Selected Class
    props.selectCurrentClass(cls)
  }


  // Will check if there is a token as well
  if(props.account.username && localStorage.getItem("token")){

    return (
      <>
      <Dropdown
        item 
        text={!props.selectedClass.className ? "Class" :  isMobile ? `${props.selectedClass.className.slice(0,10)}...`: props.selectedClass.className}
        simple
        scrolling
      >
        <Menu.Menu>
          <Menu.Item
            as={Link} to="/classform"
          >
            Add A Class
          </Menu.Item>
          <Menu.Item
            as={Link} to="/classes"
          >
            All Classes
          </Menu.Item>
          {props.classes ? props.classes.map(cls=>{
            return(
            <Menu.Item
              onClick={()=>changeClass(cls)}
              tabIndex="0"
            >
              {cls.className}
            </Menu.Item>
            )
          }): ""}

        </Menu.Menu>

      </Dropdown>

      {isMobile ? 
        <Menu.Menu position="right">
          <Dropdown
            item
            simple
            trigger={(<span><Icon name="user"/></span>)}
          >
            <Menu.Menu>
              <NavSettings/>
            </Menu.Menu>
          </Dropdown>
        </Menu.Menu> : 
        <Menu.Menu position="right">
          <NavSettings/>
        </Menu.Menu>    
      }

      </>
    )
  } else if ( props.account) {
    return (
      <Menu.Menu position="right">
        <Menu.Item
          // onClick={handleMenuChange}
          as={Link} to="/login"
        >
          Login
        </Menu.Item>
        <Menu.Item
          // onClick={handleMenuChange}
          as={Link} to="/signup"
        >
          Sign Up
        </Menu.Item>

      </Menu.Menu>
    )
  } else {
    return null
  }
    
}

const mapStatetoProps = state=>({
  account: state.accountReducer,
  classes: state.classReducer.classes,
  selectedClass: state.classReducer.selectedClass
})

export default connect(mapStatetoProps,{selectCurrentClass})(NavAuth)