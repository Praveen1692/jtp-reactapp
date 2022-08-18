import React from 'react'

function UserCard(props) {
    if(Object.keys(props.userData).length<1){
        return <h3>Enter User Name</h3>

    }
    let{avatar_url,name,blog,location,public_repos}=props.userData;

  return (
    <div className='user-wrapper'>
        <img src={avatar_url} />
        <h3>{name}</h3>
        <p>Blog link: <a href={blog}>{blog}</a></p>
        <p>Location :<b>{location}</b></p>
        <p>Public repos:<b>{public_repos}</b></p>
       
    </div>
  )
}







export default UserCard;
