import {React,useState} from 'react'
import axios from 'axios';
import { n } from './Login';

export default function MitPage() {

    const [profile, setprofile] = useState('unknown')
    const [email, setemail] = useState('unknown')
    // const getProductData = async () => {
    //     const a = await axios.post("http://localhost:5000/get_participant_adamas_adpage/");
    //     console.log(a);
    // };
    // useEffect(() => {
    //     getProductData();
    // }, []);
    axios.post("http://localhost:5000/get_participant_mit/", {
        empName: n
    }).then(response => {
        console.log('response >>> ', response);
        setprofile(response.data.data[0].empName)
        setemail(response.data.data[0].empEmail)
    }).catch(error => {
        console.error('error >>> ', error);
    });
    return (
        <div className='main-div'>
            <img className='img-mit' src="538-5386727_this-lab-is-contributed-by-marwadi-university-l-removebg-preview.png" alt="MIT University" />
            <div>
                <h1>Welcome {profile} to Mit University</h1>
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
                </table>
                <p><em>You are now viewing Mit University website...!!</em></p>
            </div>
        </div>
    )
}
