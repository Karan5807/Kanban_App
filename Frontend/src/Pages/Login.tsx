import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [usersData, setUsersData] = useState([]);

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

    const dataURL = "http://localhost:1717/getUser"

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
        <>
            <form action='POST' id="loginForm">
                <h2>Welcome to From Login</h2>
                <div>
                    <input type="text" id="username" placeholder='User Name' onChange={(e) => { setUserName(e.target.value) }} name="username" required />
                </div>
                <div>

                    <input type="password" id="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} name="password" required />
                </div>
                <button type="submit" onClick={onSubmit}>Login</button>
            </form>
        </>
    )
}

export default Login;