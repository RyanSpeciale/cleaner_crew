import axios from "axios";
import { Box, Form, FormField, TextInput, Button } from "grommet";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';


type Props = {};

const Login = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")


  const router = useRouter()

    
  
  
  const onSubmitHandler = async (e: any) => {
    e.preventDefault()
    const res = await axios.post("/api/login", {
        username: username,
        password: password
    })
     .then((response) => {
        console.log(response)
        router.push('/do/dashboard')
     })
     .catch((error) => {
        console.log(error)
        setError(error)
     })
     console.log(res)
  };

  return (
    <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center'}}>
      <Box justify="center" basis="1/2" align="center" alignContent="center" alignSelf="center" background='white' width='medium' pad='large'>
        <FormField
          name="username"
          htmlFor="text-input-id"
          label="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        >
          <TextInput id="text-input-id" name="username" />
        </FormField>
        <FormField name="password" htmlFor="text-input-id" label="Password" onChange={(e) => { setPassword(e.target.value)}}>
          <TextInput id="text-input-id" name="password" />
        </FormField>
        <Box direction="row" gap="medium" justify="center">
          <Button color="black" type="submit" primary label="Submit" onClick={onSubmitHandler} />
        </Box>
        {error.length > 3 ? <div style={{ fontSize: '17px', color: 'red'}}>{error}</div> : <></>}
      </Box>
    </div>
  );
};

export default Login;
