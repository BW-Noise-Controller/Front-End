import React, {useState,useEffect} from "react";
import {connect} from "react-redux";

import {editAccount} from "../../actions/accountAction";

import { Tab,Form } from "semantic-ui-react";

const audio =[
    {key:"1", text:"1", value: "1"},
    {key:"2", text:"2", value: "2"},
    {key:"3", text:"3", value: "3"},
    {key:"4", text:"4", value: "4"},
    {key:"5", text:"5", value: "5"},
    {key:"6", text:"6", value: "6"},
    {key:"7", text:"7", value: "7"},
    {key:"8", text:"8", value: "8"},
    {key:"9", text:"9", value: "9"},
    {key:"10", text:"10", value: "10"}

]

function GameSettings(props) {

    const [micSensitivity, setMicSensitivity] = useState("1")

    useEffect(()=>{
        setMicSensitivity(props.micSens)
    },[props])

    
    const handleSelect = (e,results) => {
        setMicSensitivity(results.value)
    }
    
    const handleSubmit = (e) => {
        props.editAccount({id: props.id, micSensitivity: micSensitivity})
    }
    return (
        <Tab.Pane>
            
            <Form>
                <Form.Select
                    label="Mic Sensitivity"
                    placeholder="Mic Sensitivity"
                    name="micSensitivity"
                    options={audio}
                    value={micSensitivity}
                    onChange={handleSelect}
                />

                <Form.Button type="submit" onClick={handleSubmit} color="primary">Submit</Form.Button>
            </Form>
        </Tab.Pane>
    )
}

const mapStatetoProps = state => ({
    id: state.accountReducer.id,
    micSens: state.accountReducer.micSensitivity,
})

export default connect(mapStatetoProps,{editAccount})(GameSettings)