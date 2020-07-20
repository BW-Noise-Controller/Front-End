import React, { useState } from 'react';
import axiosWithAuth from '../axiosWithAuth';
import styled from "styled-components";

import { Form, Input, Select, Button, Message, Grid, Container, Header, Divider, Segment } from "semantic-ui-react";

const grades = [
  {key:"0", name:"grade", text:"Kindergarten", value: "Kindergarten"},
  {key:"1", text:"First Grade", value: "First Grade"},
  {key:"2", text:"Second Grade", value: "Second Grade"},
  {key:"3", text:"Third Grade", value: "Third Grade"},
  {key:"4", text:"Fourth Grade", value: "Fourth Grade"},
  {key:"5", text:"Fifth grade", value: "Fifth grade"},
  {key:"o", text:"Other", value:"Other"}

]


const ClassSignUp = props => {

const [classSignupCreds, setClassSignupCreds] = useState({
    className: "",
    theme: "Farm",
    grade: "Kindergarten",
    numberOfKids: "" ,

  });

  const handleChange = e => {

    setClassSignupCreds({
      ...classSignupCreds,
      [e.target.name]: e.target.value,
      err: null
    });
  };

  const handleSelect = (e,results) => {
    setClassSignupCreds({
      ...classSignupCreds,
      [results.name]: results.value
    })
  }

  const signup = () => {
    // axiosWithAuth()
    //   .post(`https://noise-controller-backend.herokuapp.com/api/classes`, {
    //     name: classSignupCreds.name,
    //     teacherId: classSignupCreds.teacherId,
    //     grade: classSignupCreds.grade
    //   })
    //   .then(res => {
    //     localStorage.setItem("token", res.data.payload);
    //     props.history.push("/home");
    //   })
    //   .catch(err =>
    //     setClassSignupCreds({
    //       ...classSignupCreds,
    //       err: "Error creating class. Please try again."
    //     })
    //   );
    console.log(classSignupCreds)
  };

  const handleSubmit = e => {
    e.preventDefault();
    classSignupCreds.name === "" || classSignupCreds.teacherId === "" || classSignupCreds.grade === ""
      ? setClassSignupCreds({
          ...classSignupCreds,
          err: "Please complete all class signup fields."
        })
      : signup();
  };

  return (
    <Segment>
      
        
        <Header as="h3" textAlign="center">Add a New Class</Header>
        <Divider/>
      <Form>
        <Form.Field
          control={Input}
          label="Class Name"
          placeholder="Class Name"
          name="className"
          value={classSignupCreds.className}
          onChange={handleChange}
        />
        
        <Form.Field
          control={Input}
          type="number"
          min="1"
          label="Students"
          name="numberOfKids"
          placeholder="How many students"
          value={classSignupCreds.numberOfKids}
          onChange={handleChange}
        />
        
        <Form.Field
          label="Grade"
          control={Select}
          options={grades}
          placeholder="Grade"
          name="grade"
          value={classSignupCreds.grade}
          onChange={handleSelect}
        />

        <Form.Field
          label="Theme"
          control={Select}
          disabled
          options={[{key:"farm", text:"Farm - More coming soon!", value: "Farm"}]}
          name="theme"
          placeholder="Theme"
          value={classSignupCreds.theme}
          onChange={handleSelect}
        />
        
        {false && <Message
          error
          header="Action"
          content="HUHH"
        />}
        
        <Form.Field onClick={handleSubmit} control={Button} color="primary">Submit</Form.Field>
        
      </Form>
    </Segment>
  );
};
export default ClassSignUp;
