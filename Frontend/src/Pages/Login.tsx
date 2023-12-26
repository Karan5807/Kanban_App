import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';


function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [usersData, setUsersData] = useState<[]>([]); 

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const postData = async () => {
            try {
                await axios.post("http://localhost:1717/Register", { userName, password })
            } catch (error) {
                console.error("Error while sending Data from Frontend")
            }
        }
        postData();
        console.log(userName, password, "Data");
    }

    const dataURL: string = "http://localhost:1717/getUser";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(dataURL)
                setUsersData(response.data);
            } catch (error) {
                console.error("Error while recieve data from Database")
            }
        }
        fetchData();
    }, []);

    console.log(usersData, "userData");


    return (
        <Grid container className='LoginScreen'>
            <Grid container display={'flex'}>

                <Grid  minWidth={500} textAlign={"center"} bgcolor={"aquamarine"}>
                    <Grid item>
                        <Typography variant='h6'>Sign Up</Typography>
                        <Typography variant='h6'>To Keep Connect with you work </Typography>
                    </Grid>
                </Grid>

                <Grid marginLeft={30}>
                    <Grid container display={"block"}>
                        <Grid item>
                            <Typography textAlign={"center"} variant='h3'>Create Account</Typography>
                        </Grid>
                        <Grid item display={"flex"} justifyContent={"space-around"}>
                            <Button variant='outlined' color='secondary'>
                                <GitHubIcon/>
                            </Button>
                            <Button variant='outlined' color='primary'>
                                <GoogleIcon />
                            </Button>
                        </Grid>
                    </Grid>
                    <form action='POST' id="loginForm">
                        <h2>Welcome to From Login</h2>
                        <Grid>
                            <TextField type='text' id="userName" label="User Name" variant="outlined" onChange={(e) => { setUserName(e.target.value) }} name="username" required />
                        </Grid>
                        <div>
                            <TextField type='text' id="userName" label="User Name" variant="outlined" onChange={(e) => { setUserName(e.target.value) }} name="username" required />
                            <input type="password" id="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} name="password" required />
                        </div>
                        <button type="submit" onClick={onSubmit}>Login</button>
                    </form>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Login;