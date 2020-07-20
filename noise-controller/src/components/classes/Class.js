import React from "react";

import { Table,Button } from "semantic-ui-react";


function Class(props) {
    const {cls} = props;

    return (

        <Table.Row>
            <Table.Cell textAlign="center" collapsing>
                <Button color="primary" icon="edit" content="Edit"/>
                
                <Button color="red" icon="delete" content="Delete"/>
            </Table.Cell>
            <Table.Cell>{cls.className}</Table.Cell>
            <Table.Cell>{cls.grade}</Table.Cell>
            <Table.Cell>{cls.numberOfKids}</Table.Cell>
            <Table.Cell >{cls.streak}</Table.Cell>
            <Table.Cell>{cls.theme}</Table.Cell>

        </Table.Row>
    )
}


export default Class