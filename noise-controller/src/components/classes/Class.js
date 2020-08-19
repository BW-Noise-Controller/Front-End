import React from "react";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux" 

import { Table,Button } from "semantic-ui-react";

import {selectCurrentClass, deleteClass} from "../../actions/classesAction";


function Class(props) {
    const {cls} = props;
    const history = useHistory();

    const editClass = e =>{

        props.selectCurrentClass(cls)
        history.push(`/classes/${cls.className}`)

    }

    const handleDelete = e => {
        props.deleteClass(cls.id)
    }

    return (

        <Table.Row>
            <Table.Cell textAlign="center" collapsing>
                <Button color="primary" icon="edit" content="Edit" onClick={editClass}/>
                
                <Button color="red" icon="delete" content="Delete" onClick={handleDelete}/>
            </Table.Cell>
            <Table.Cell>{cls.className}</Table.Cell>
            <Table.Cell>{cls.grade}</Table.Cell>
            <Table.Cell>{cls.numberOfKids}</Table.Cell>
            <Table.Cell >{cls.streak}</Table.Cell>
            <Table.Cell>{cls.theme}</Table.Cell>

        </Table.Row>
    )
}



export default connect(()=>{},{selectCurrentClass, deleteClass})(Class)