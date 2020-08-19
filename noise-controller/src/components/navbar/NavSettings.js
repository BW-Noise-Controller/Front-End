import React from "react"
import { connect } from "react-redux"
import {Link ,useHistory} from "react-router-dom"

import { Menu } from "semantic-ui-react";

function NavSettings(props) {
  const history = useHistory();


  const handleLogout = e => {

  }

    return (
        <> 
            <Menu.Item
            //   onClick={handleMenuChange}
              onClick={ ()=> {
                let path = "/"+props.selectedClass.className + "/scores"
                history.push(path ,props.selectedClass)
              }}
              tabindex="0"
              name="scores"
              disabled={props.selectedClass.className ? false: true}
            />
  
            <Menu.Item
            //   onClick={handleMenuChange}
              as={Link} to="/settings"
              name="settings"
            />
            
            <Menu.Item
              name="logout"
              // active={selectedMenu === "logout"}
              onClick={handleLogout}
              tabindex="0"
            /> 
  
         </>
    )
    
};

const mapStatetoProps = state => ({ 
    selectedClass: state.classReducer.selectedClass
})

export default connect(mapStatetoProps,{})(NavSettings);