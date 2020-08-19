// Where we will render classroom daily scores (multiple daily scores from the entire week maybe? depends on data..)
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux"
import {useHistory} from "react-router-dom"

import ScoreCard from './ScoreCard';
import {getScores ,selectCurrentClass} from "../actions/classesAction.js";

import { Table, Segment, Header } from "semantic-ui-react";

const ScoresList = props => {
    const history = useHistory();

    useEffect(() => {
        console.log("class  change")
        if(props.selectedClass.className && props.match.params.className !== props.selectedClass.className){
            props.getScores(props.selectedClass.id)
            let path =  "/" + props.selectedClass.className + "/scores";
            history.push(path, props.selectedClass)
        }
    }, [props.selectedClass]);

    useEffect(()=> {
        console.log("match change", props.match.params)
        
        let [classUrl] = props.classes.filter(cls => cls.className === props.match.params.className)
        
        if(props.match.params.className !== props.selectedClass.className){
                console.log(props.match.params)
            
                props.selectCurrentClass(classUrl)
            } else {
                
        }

    },[props.match.params])


    ///refresh page is props.selectedClass update

    return (
        <Segment>
            <Header as="h2" textAlign="center">
               Scores for {props.selectedClass.className}
            </Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Theme</Table.HeaderCell>
                        <Table.HeaderCell>Score</Table.HeaderCell>
                        <Table.HeaderCell>Streak</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {props.scores ? props.scores.map(score => <ScoreCard score={score} />): null}

                </Table.Body>

            </Table>
            
        </Segment>
    );
}

const mapStatetoProps = state => ({
    selectedClass : state.classReducer.selectedClass,
    scores : state.classReducer.selectedClassScores,
    classes: state.classReducer.classes
})

export default connect(mapStatetoProps,{getScores,selectCurrentClass})(ScoresList);