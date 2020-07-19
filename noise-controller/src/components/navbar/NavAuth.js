import React from "react";
import { Link } from 'react-router-dom';

import NavSettings from "./NavSettings.js";

import {  Menu, Dropdown, Icon } from 'semantic-ui-react';
import {connect} from "react-redux"

function NavAuth(props) {
  const [isMobile, setMobile] = React.useState(getWindowWidth())
  const [selectedClass, setSelectedClass] = React.useState("")

  React.useEffect(()=>{

    setSelectedClass(props.selectedClass.name)
    

  },[props.selectedClass])
  
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
    setSelectedClass(cls.name)
  }

  // Will check if there is a token as well
  if(props.account && localStorage.getItem("token")){

    return (
      <>
      <Dropdown
        item 
        text={isMobile ? `${selectedClass.slice(0,10)}...`: selectedClass}
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
          {props.classes.map(cls=>{
            return(
            <Menu.Item
              onClick={()=>changeClass(cls)}
            >
              {cls.name}
            </Menu.Item>
            )
          })}

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

export default connect(mapStatetoProps,{})(NavAuth)