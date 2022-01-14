import { React, useState } from 'react';
import axios from 'axios';
import { database, n } from './Login';

export default function Adpage() {
    const [profile, setprofile] = useState('unknown')
    const [email, setemail] = useState('unknown')
    const [phone, setphone] = useState('unknown')
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

    return (
        <div className='main-div'>
            <img src="Adamas_University_Logo.png" alt="Adamas University" />
            <div>
                <h1>Welcome {profile} to Adamas University</h1>
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
                <p><em>You are now viewing Adamas University website...!!</em></p>
            </div>
        </div>
    )
}
