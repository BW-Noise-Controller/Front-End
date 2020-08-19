import React from 'react';

import {Table} from "semantic-ui-react";

function ScoreCard(props) {

    const {score} = props;

    return (
    <Table.Row >
        <Table.Cell>{score.date}</Table.Cell>
        <Table.Cell disabled>{score.theme}</Table.Cell>
        <Table.Cell>{score.score}</Table.Cell>
        <Table.Cell>{score.streak}</Table.Cell>
    </Table.Row>

)}

export default ScoreCard;

