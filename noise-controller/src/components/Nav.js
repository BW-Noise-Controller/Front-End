import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux"


import { Container, Menu, Dropdown, Icon, Responsive, Segment } from 'semantic-ui-react';

import styled from "styled-components";



const MenuStyled = styled.div`
  font-size: 1.4rem;

`;



function Nav(props) {

  const [selectedClass, setSelectedClass] = React.useState("")
  const [selectedMenu, setSelectedMenu] = React.useState("lets play")
  const [isMobile, setMobile] = React.useState(getWindowWidth())

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
  
  function mobileSettings() {
    if(isMobile){
      return (
        <Menu.Menu  position="right">
          <Dropdown
          item
          simple
          trigger={(<span><Icon name="user"/></span>)}
          >
          <Menu.Menu >
            
            <Menu.Item
              onClick={handleMenuChange}
              as={NavLink} to="/scores"
              name="scores"
            />
  
            <Menu.Item
              onClick={handleMenuChange}
              as={NavLink} to="/settings"
              name="settings"
            />
            
            <Menu.Item
              name="logout"
              // active={selectedMenu === "logout"}
              onClick={handleMenuChange}
            /> 
        
          </Menu.Menu>
          </Dropdown>
        </Menu.Menu>
      )} else {
        return (
          <Menu.Menu  position="right">
            
            <Menu.Item
              onClick={handleMenuChange}
              as={NavLink} to="/scores"
              name="scores"
            />
  
            <Menu.Item
              onClick={handleMenuChange}
              as={NavLink} to="/settings"
              name="settings"
            />
            
            <Menu.Item
              name="logout"
              // active={selectedMenu === "logout"}
              onClick={handleMenuChange}
            /> 
  
          </Menu.Menu>
        )     
      }
    
  }

  function changeClass(cls) {
    console.log("class picked",cls)
    //action for currently Selected Class
    setSelectedClass(cls.name)
  }
  
  function handleMenuChange(e,{name}) {
    setSelectedMenu(name)
  }

  function isLoggedIn(usr) {

    if(usr){


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
              as={NavLink} to="/classform"
            >
              Add A Class
            </Menu.Item>
            <Menu.Item
              as={NavLink} to="/classes"
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

        {mobileSettings()}

        </>
      )
    } else {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            onClick={handleMenuChange}
            as={NavLink} to="/login"
          >
            Login
          </Menu.Item>
          <Menu.Item
            onClick={handleMenuChange}
            as={NavLink} to="/signup"
          >
            Sign Up
          </Menu.Item>

        </Menu.Menu>
      )
    }
    
  }


  return (
    <Menu>
      <Menu.Item key='home'
        name="Lets Play"
        as = {NavLink} exact to="/"
      >
        
      </Menu.Item>

      {isLoggedIn(true)}
      
    </Menu>
  );
}

const mapStatetoProps = state=>({
  account: state.accountReducer,
  classes: state.classReducer.classes,
  selectedClass: state.classReducer.selectedClass
})
export default connect(mapStatetoProps,{})(Nav);