import React from "react"
import { connect } from "react-redux"
import {Link} from "react-router-dom"

import { Menu } from "semantic-ui-react";

function NavSettings(props) {


    return (
        <> 
            <Menu.Item
            //   onClick={handleMenuChange}
              as={Link} to="/scores"
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
            //   onClick={handleMenuChange}
            /> 
  
         </>
    )
    
};

const mapStatetoProps = state => ({ 
    
})

export default connect(mapStatetoProps,{})(NavSettings);