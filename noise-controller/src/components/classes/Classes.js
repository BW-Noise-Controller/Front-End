import React from "react";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

import Class from "./Class";

import {  Segment,Header, Table,Button,Responsive } from 'semantic-ui-react';

function Classes(props) {
    

    return (
        <Segment>
            <Header as="h2" textAlign="center">All Classes</Header>
            <Table celled definition>
                <Table.Header fullWidth>
                    <Table.Row>
                        <Table.HeaderCell/>
                        <Table.HeaderCell>Class Name</Table.HeaderCell>
                        <Table.HeaderCell>Grade</Table.HeaderCell>
                        <Table.HeaderCell>Students</Table.HeaderCell>
                        <Table.HeaderCell>Streak</Table.HeaderCell>
                        <Table.HeaderCell>Theme</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {props.classes.length > 0 ? props.classes.map(cls => <Class cls={cls} />):  null}
                </Table.Body>
                
                <Table.Footer fullWidth>
                    <Responsive as={Table.HeaderCell} minWidth={768}/>
                        
                
                    
                    <Table.HeaderCell colSpan="5" textAlign="right">
                        <Button
                            content="Add a Class"
                            icon="plus"
                            floated="right"
                            primary
                            as={Link} to="/classform"
                        />
                    </Table.HeaderCell>
                </Table.Footer>

            </Table>

        </Segment>
    )
}


const mapStatetoProps = state=>({
    classes: state.classReducer.classes,
    selectedClass: state.classReducer.selectedClass
})


export default connect(mapStatetoProps,{})(Classes);