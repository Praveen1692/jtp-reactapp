import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function PostList() {
    const[posts,setposts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>setposts(data))
        .catch((err)=>{
            console.log(err);
        })
},[])

  return (
    <div>
        <ul>
            {
                posts.map(post =>{
                    return <li key={post.id}>{post.title}</li>
                })
            }
        </ul>

       
        
    </div>
  )
}
