import React, { createRef, useEffect, useState } from 'react'
import UserCard from './UserCard';
import axios from 'axios';



function GithubUser() {

    const[userData,setUserData]=useState({});
    const[name,setName]=useState('');

    const inputRef=createRef(); // cre.. keyword hai

    

   const getUserInfo = ()=>{
        axios.get(`https://api.github.com/users/${name}`).then((response)=>{
            setUserData(response.data);
        })
        inputRef.current.value='';
        setName('');

    }
    useEffect(()=>{
        inputRef.current.focus();
    },[]);

  return (

    <div className='github-wrapper'>

        <h1>Het github user details</h1>
        <input className='username-input' placeholder='Enter Username..'
        onChange={(e)=>setName(e.target.value)} ref={inputRef}></input>
       <br></br>
        <br></br>
        <button className='info-btn' onClick={getUserInfo}>Get Info</button>

        <br/>
        <br/>
        <UserCard userData={userData}></UserCard>

    </div>



  )


}


export default GithubUser;
