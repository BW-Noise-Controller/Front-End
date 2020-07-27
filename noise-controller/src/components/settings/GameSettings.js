import React from "react";
import {connect} from "react-redux";

import { Tab,Form } from "semantic-ui-react";

function GameSettings(props) {
    
    return (
        <Tab.Pane>
            
            <Form>
                <Form.Field
                label=""
                />
            </Form>
        </Tab.Pane>
    )
}


export default connect()(GameSettings)