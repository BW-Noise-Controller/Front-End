import React from "react"
import { connect } from "react-redux"
import {Link ,useHistory, Redirect} from "react-router-dom"

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
                let path = "/"+props.selectedClassName + "/scores"
                history.push(path)
              }}
              tabindex="0"
              name="scores"
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
    selectedClassName: state.classReducer.selectedClass.className
})

export default connect(mapStatetoProps,{})(NavSettings);