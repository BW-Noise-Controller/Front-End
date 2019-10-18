// login page we are going to try using react hooks and if we cant use it then we can just use redux forms 

import React, {useState} from 'react';
import useForm from 'react-hook-form';
import './App.css';


const Login = (props) => {

    const { register, handleSubmit } = useForm();
    

    const onSubmit = values => console.log(values)
    
    return (
        <div className='App'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username</label>
                <input>
                 maxLength="15"
                 id="username"
                 name="username"
                 type="text"
                 value={}
                 ref={register}
                />
                <label>Password</label>
                <input>
                 id="Password"
                 name="Password"
                 type="text"
                 value={}
                 ref={register}
                />
                <input type="submit"/>
            </form>
         </div>
            
       
    )

}

export default Team;