import React from 'react'

export default function Login() {
  return (
    <div className='Log'>
        <img src="testi2.png" alt="user" className='user-img'/>
        <br/>
      <input type="text" placeholder='Username' className='user'/>
      <br/>
      <button type="submit" className='btn'>Check</button>
    </div>
  )
}
