import { React, useState } from 'react';
import axios from 'axios';
import { n,database, university } from './Login';
import { useNavigate } from 'react-router';

export default function Adpage() {
    const [profile, setprofile] = useState('unknown')
    const [email, setemail] = useState('unknown')
    const [phone, setphone] = useState('unknown')
    const navigate=useNavigate();
    // const getProductData = async () => {
    //     const a = await axios.post("http://localhost:5000/get_participant_adamas_adpage/");
    //     console.log(a);
    // };
    // useEffect(() => {
    //     getProductData();
    // }, []);
    axios.post("http://localhost:5000/get_participant/", {
        empName: n,
        database: database
    }).then(response => {
        // console.log('response >>> ', response);
        setprofile(response.data.data[0]["0"].empName)
        setemail(response.data.data[0]["0"].empEmail)
        setphone(response.data.data[0]["0"].empPhoneNo)
    }).catch(error => {
        console.error('error >>> ', error);
    });
    const handleLogOut=()=>{
        navigate('/');
    }
    return (
        <div className='main-div'>
            <img src={`${database}.png`} alt="Adamas University" />
            <div>
                <h1>Welcome {profile} to {university}</h1>
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
                <p><em>You are now viewing {university} website...!!</em></p>
                <button type="submit" className='btn btn-log' onClick={handleLogOut}>Log out</button>
            </div>
        </div>
    )
}
