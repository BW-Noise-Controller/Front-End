import React from "react";
import { Link } from 'react-router-dom';
import { Form, Header, Message, Segment } from 'semantic-ui-react';

import { Formik } from "formik";
import * as yup from "yup";


const yupValidation = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Please enter your email"),
  title: yup.string().required("Please enter your title"),
  lastName: yup.string().required("Last Name is Required"),
  password: yup.string().required("Please enter password").min(8, "Password must be at least 8 characters").oneOf([yup.ref("confirmPassword")], "Passwords must match"),
  confirmPassword: yup.string().required("Please confirm password").min(8, "Password must be at least 8 characters").oneOf([yup.ref("password")], "Passwords must match")
})

const title = [
  {key:"0", text:"Dr.", value: "Dr."},
  {key:"0", text:"Mr.", value: "Mr."},
  {key:"0", text:"Mrs.", value: "Mrs."},
  {key:"0", text:"Ms.", value: "Ms."},

]


const Signup = props => {



  return (
    <Segment>
      
        <Header as='h1' textAlign="center">
          Sign Up
        </Header>

        <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={yupValidation}
        onSubmit={(values) => {
          console.log(values)
        }}
        
        validateOnChange={false}
      >
        {props => (
          <Form>
            <Form.Input
              label="Email"
              type="text"
              name="email"
              placeholder="Enter email..."
              value={props.values.email}
              onChange={(e) => {
                props.setErrors({})
                props.handleChange(e)
              }}
              autoComplete="email"
              error={props.errors.email}
            />
            <Form.Select
              label="Title"
              placeholder="Title"
              name="title"
              options={title}
              value={props.values.title}
              onChange={(e,results) => props.setFieldValue("title", results.value) && props.setErrors({})}
              error={props.errors.title}
              fluid
            />
            <Form.Input
              label="First Name"
              type="text"
              name="firstName"
              placeholder="Enter first name..."
              value={props.values.firstName}
              onChange={(e) => {
                props.setErrors({})
                props.handleChange(e)
              }}
              autoComplete="first name"
              error={props.errors.firstName}
            />
            <Form.Input
              label="Last Name"
              type="text"
              name="lastName"
              placeholder="Enter last name..."
              value={props.values.lastName}
              onChange={(e) => {
                props.setErrors({})
                props.handleChange(e)
              }}
              autoComplete="last name"
              error={props.errors.lastName}
            />

            <Form.Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password..."
              value={props.values.password}
              onChange={(e) => {
                props.setErrors({})
                props.handleChange(e)
              }}
              error={props.errors.password}
            />
            
            <Form.Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password..."
              value={props.values.confirmPassword}
              onChange={(e) => {
                props.setErrors({})
                props.handleChange(e)
              }}
              error={props.errors.confirmPassword}
            />

            <Form.Button

              fluid
              color="teal"
              size='large'
              type='submit'
              onClick={props.handleSubmit}
              disabled={!Object.keys(props.errors).length == 0}
            >
              Submit
            </Form.Button>
            
          </Form>
          )}
        </Formik>
          
        <Message size='big'>
          Already have an account? <Link to='/login'>Login</Link>
        </Message>
      
    </Segment>
  );
};
export default Signup;