import React, { useState,useEffect } from 'react';
import {useParams} from "react-router-dom";
import { connect } from "react-redux";



import { addClass, editClass, deleteClass } from "../actions/classesAction.js";

import { Form, Input, Select, Button, Message,  Header, Divider, Segment } from "semantic-ui-react";

const grades = [
  {key:"0", text:"Kindergarten", value: "Kindergarten"},
  {key:"1", text:"First Grade", value: "First Grade"},
  {key:"2", text:"Second Grade", value: "Second Grade"},
  {key:"3", text:"Third Grade", value: "Third Grade"},
  {key:"4", text:"Fourth Grade", value: "Fourth Grade"},
  {key:"5", text:"Fifth grade", value: "Fifth grade"},
  {key:"o", text:"Other", value:"Other"}

]


const ClassSignUp = props => {
  const params = useParams();
  console.log(params)
  console.log(props)

  const [header, setHeader] = useState("")
  const [classSignupCreds, setClassSignupCreds] = useState({
      className: "",
      theme: "Farm",
      grade: "Kindergarten",
      numberOfKids: "" ,

  });

  useEffect(()=>{
    if(params["className"]=== props.selectedClass.className){
      setClassSignupCreds(props.selectedClass)
      setHeader("Edit Class")
    } else if( Object.keys(params).length === 0) {
      setHeader("Add a New Class")
    } else {
      props.history.push("/")
    }
  },[props.selectedClass])

  const handleChange = e => {

    setClassSignupCreds({
      ...classSignupCreds,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e,results) => {
    setClassSignupCreds({
      ...classSignupCreds,
      [results.name]: results.value
    })
  }

  const handleDelete = e => {
    
    props.deleteClass(props.selectedClass.id)
  }


  const handleSubmit = e => {
    e.preventDefault();
    if(params["className"]){
      props.editClass(classSignupCreds)
    }else {
      props.addClass(classSignupCreds)
    }
  };


  return (
    
    <Segment>
      
      {params["className"] === props.selectedClass.className &&<Button color="red" floated="right" icon="delete" content="Delete Class" onClick={handleDelete}/> }
        <Header as="h3" textAlign="center">{header}</Header>
        
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


const mapStatetoProps = state => ({
  selectedClass : state.classReducer.selectedClass,
  fetching: state.classReducer.fetching,
  error: state.classReducer.error,
})


export default connect(mapStatetoProps,{addClass, editClass,deleteClass})(ClassSignUp);
