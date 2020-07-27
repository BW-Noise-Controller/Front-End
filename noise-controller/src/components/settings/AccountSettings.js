import React, { useState,useEffect } from "react";
import {connect} from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";

import { Tab,Form, Button } from "semantic-ui-react";
import  styled from "styled-components";

import {editAccount, deleteAccount} from "../../actions/accountAction";

const title = [
    {key:"0", text:"Dr.", value: "Dr."},
    {key:"0", text:"Mr.", value: "Mr."},
    {key:"0", text:"Mrs.", value: "Mrs."},
    {key:"0", text:"Ms.", value: "Ms."},

]

const ButtonStyled = styled.button`
    height: 2.7rem;
    margin-top: auto!important;
    margin-left: auto!important;
`;

const yupSchema = yup.object().shape({
    title: yup.string().required(),
    firstName: yup.string(),
    lastName: yup.string().required("Last Name is Required"),
    password: yup.string().when("confirmPassword",(confirmPassword, field) => 
        confirmPassword ? field.required("Please enter password").min(8, "Password must be at least 8 characters").oneOf([yup.ref("confirmPassword")], "Passwords must match"): field
    ),
    confirmPassword: yup.string().when("password",(password, field) => 
        password ? field.required("Please confirm password").min(8, "Password must be at least 8 characters").oneOf([yup.ref("password")], "Passwords must match"): field
    ),
    
},[["password", "confirmPassword"]]);

// (password, field) => 
        // password ? field.required().min(8).oneOf([yup.ref("password")]): field

function AccountSettings(props) {


    useEffect(()=>{
        // setUserCreds({
        //     title: props.account.title,
        //     firstName: props.account.firstName,
        //     lastName: props.account.lastName,
            
        // })
    },[props.account])

    const handleSelect = (e,results) => {
        // setUserCreds({
        //   ...userCreds,
        //   [results.name]: results.value
        // })

    }
    
    // const handleChange = e => {
    //     setUserCreds({
    //         ...userCreds,
    //         [e.target.name]: e.target.value,
    //     })
    // }

    // const handleSubmit = e => {
    //     console.log("submit")
    //     console.log(yupSchema)

    //     // props.editAccount(userCreds)
    // }

    const handleDelete = e => {
        console.log("delete")
        props.deleteAccount(props.account.id)
    }
    
    return (
        <Tab.Pane >
            <Formik
                initialValues={{
                    title : props.account.title,
                    firstName: props.account.firstName,
                    lastName : props.account.lastName,
                    password : "",
                    confirmPassword: "",
                }}
                validationSchema= {yupSchema}
                onSubmit={(values) => {
                    props.editAccount(values)
                }}
                
                validateOnBlur={false}
            >
                { props => 
                (
                   
                <Form>
                    <Form.Group widths="16" unstackable>

                        <Form.Select
                            label="Title"
                            placeholder="Title"
                            name="title"
                            options={title}
                            value={props.values.title}
                            onChange={(e,results) => props.setFieldValue("title", results.value)}
                            fluid
                        />

                        <ButtonStyled as={Button} compact size="large" negative onClick={handleDelete}>
                            Delete Account
                        </ButtonStyled>
                        
                    </Form.Group>
                    <Form.Input
                        label="First Name"
                        placeholder="First Name"
                        name="firstName"
                        value={props.values.firstName}
                        onChange={props.handleChange}
                    />    
                    
                    <Form.Input
                        label="Last Name"
                        placeholder="Last Name"
                        name="lastName"
                        value={props.values.lastName}
                        onChange={props.handleChange}
                        error={props.errors.lastName}
                    />

                    <Form.Input
                        label="Password"
                        placeholder="Password"
                        name="password"
                        value={props.values.password}
                        onChange={props.handleChange}
                        error={props.errors.password}
                    />  

                    <Form.Input
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={props.values.confirmPassword}
                        onChange={props.handleChange}
                        error={props.errors.confirmPassword}
                    />        

                    <Form.Button type="submit" onClick={props.handleSubmit} color="primary">Submit</Form.Button>
                </Form>
                )}
            </Formik>
        </Tab.Pane>
    )
}

const mapStatetoProps = state => ({
    account : state.accountReducer
})

export default connect(mapStatetoProps, {editAccount, deleteAccount})(AccountSettings);