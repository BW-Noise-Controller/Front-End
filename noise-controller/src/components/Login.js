import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Formik } from "formik";
import * as yup from "yup";


import { Header, Form, Message, Segment } from 'semantic-ui-react';


const yupValidation = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Please enter your email"),
  password: yup.string().min(8,"Password must be at least 8 characters").required("Please enter your password")
})

const Login = props => {



  return (
    <Segment>
      
      <Header as="h1" textAlign="center">Login</Header>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={yupValidation}
        onSubmit={(values) => {
          console.log(values)
        }}
        
        validateOnChange={false}
      >
        { props => (
        
          <Form>
              
            <Form.Input
              label="Email"
              type="email"
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
              autoComplete="current-password"
              error={props.errors.password}
            />

            <Form.Button
              fluid
              color="primary"
              size="large"
              type="submit"
              onClick={props.handleSubmit}>
              Submit
            </Form.Button>
              
          </Form>
        )}

      </Formik>

        <Message size='big'>
            New to us? <Link to='/signup'>Sign up</Link>
        </Message>
  
    </Segment>
  );
};
export default Login;