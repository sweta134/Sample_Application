import { React, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function Login() {
  const [user, setuser] = useState();
  const navigate = useNavigate();
  const handleCheck = (e) => {
    var n = String(user)
    console.log(n.split('@')[1])
    var d = n.split('@')[1];
    // axios.post("http://localhost:5000/get_participant/", {
    //     Domain: user
    //   }).then(response => {
    //     console.log('response >>> ', response);
    //     if(response.data.status==="success")
    //     {
    //       axios.post("http://localhost:5000/get_domain/", {
    //         Domain:d
    //       }).then(response => {
    //         console.log('response >>> ', response);

    //       }).catch(error => {
    //         console.error('error >>> ', error);
    //       });

    //     }

    //   }).catch(error => {
    //     console.error('error >>> ', error);
    //   });
    axios.post("http://localhost:5000/get_domain/", {
      Domain: d
    }).then(response => {
      console.log('response >>> ', response.data.data[0]);
      if(response.data.data[0]===undefined){
        alert("organisation not found!")
      }else{
      if (response.data.data[0].orgName === "Adamas University") {
        axios.post("http://localhost:5000/get_participant_adamas/", {
          empName: user
        }).then(response => {
          console.log('response >>> ', response);
          if(response.data.data[0]===undefined)
            alert("User is invalid");
          else
            navigate('/adamasuniversity');
        }).catch(error => {
          console.error('error >>> ', error);
        });
        
      }
      if(response.data.data[0].orgName === "Mit") {
        axios.post("http://localhost:5000/get_participant_mit/", {
          empName: user
        }).then(response => {
          console.log('response >>> ', response);
          if(response.data.data[0]===undefined)
            alert("User is invalid")
          else
            navigate('/mit');
        }).catch(error => {
          console.error('error >>> ', error);
        });
      }
      
    }
    }).catch(error => {
      console.error('error >>> ', error);
    });

  }
  return (
    <div className='Log'>
      <img src="testi2.png" alt="user" className='user-img' />
      <br />
      <input type="text" value={user} placeholder='Username' className='user' onChange={e => [setuser(e.target.value)]} />
      <br />
      <button type="submit" className='btn' onClick={handleCheck}>Check</button>
    </div>
  )
}
