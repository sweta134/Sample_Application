import { React, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Adpage from './Adpage';

var n,d,database;

export default function Login() {
  const [user, setuser] = useState();
  const navigate = useNavigate();
  const handleCheck = (e) => {
    n = String(user)
    console.log(n.split('@')[1])
    d = n.split('@')[1];
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
      console.log('response >>> ',response);
      if(response.data.data[0]["0"]===undefined){
        alert("organisation not found!")
      }else{
      axios.post("http://localhost:5000/get_database/", {
        Domain: d
      }).then(response => {
        console.log('response >>> ',response);
        console.log(response.data.data[0].database_name);
        database=response.data.data[0].database_name;
         axios.post("http://localhost:5000/get_participant/", {
              empName: user,
              database:database
            }).then(response => {
              console.log('response >>> ', response.data.data[0]["0"]);
              n=response.data.data[0]["0"]
              if(response.data.data[0]["0"]===undefined)
                alert("User is invalid");
              else
                navigate('/adamasuniversity');
            }).catch(error => {
              console.error('error >>> ', error);
            });
          // if(response.data.data[0]["0"].orgName === "Mit") {
          //   axios.post("http://localhost:5000/get_participant_mit/", {
          //     empName: user
          //   }).then(response => {
          //     console.log('response >>> ', response);
          //     if(response.data.data[0]["0"]===undefined)
          //       alert("User is invalid")
          //     else
          //       navigate('/mit');
          //   }).catch(error => {
          //     console.error('error >>> ', error);
          //   });
          // }
      }).catch(error => {
        console.error('error >>> ', error);
      });



      
    }
    }).catch(error => {
      console.error('error >>> ', error);
    });
    console.log(n);
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
export {database};
export {n};