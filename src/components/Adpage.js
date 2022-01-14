import { React, useState } from 'react';
import axios from 'axios';
import { database, n, university } from './Login';
import { useNavigate } from 'react-router';

export default function Adpage() {
    const [profile, setprofile] = useState('unknown')
    const [email, setemail] = useState('unknown')
    const [phone, setphone] = useState('unknown')
    const navigate = useNavigate()
    console.log(n);
    axios.post("http://localhost:5000/get_participant/", {
        empName: n,
        database:database
    }).then(response => {
        // console.log(typeof(response.data));
        console.log('response >>> ', n);
        setprofile(n.empName)
        setemail(n.empEmail)
        setphone(n.empPhoneNo)
    }).catch(error => {
        console.error('error >>> ', error);
    });
    const handleLogOut=()=>{
        navigate('/')
    }
    return (
        <div className='main-div'>
            <img src={`${database}.png`} alt="Adamas University" />
            <div>
                <h1>Welcome {profile} to {university}</h1>
                <br />
                <table align="center" border="2">
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{profile}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Phone No.</td>
                        <td>{phone}</td>
                    </tr>
                    </tbody>
                </table>
                <p><em>You are now viewing {university} website...!!</em></p>
                <button type="submit" className='btn' onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    )
}
