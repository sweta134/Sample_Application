import { React, useState } from 'react';
import axios from 'axios';
import { n } from './Login';

export default function Adpage() {
    const [profile, setprofile] = useState('unknown')
    const [email, setemail] = useState('unknown')
    const [phone, setphone] = useState('unknown')
    // const getProductData = async () => {
    //     const a = await axios.post("http://localhost:5000/get_participant_adamas_adpage/");
    //     console.log(a);
    // };
    // useEffect(() => {
    //     getProductData();
    // }, []);
    axios.post("http://localhost:5000/get_participant_adamas/", {
        empName: n
    }).then(response => {
        console.log('response >>> ', response);
        setprofile(response.data.data[0]["0"].empName)
        setemail(response.data.data[0]["0"].empEmail)
        setphone(response.data.data[0]["0"].empPhoneNo)
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
                </table>
                <p><em>You are now viewing Adamas University website...!!</em></p>
            </div>
        </div>
    )
}
