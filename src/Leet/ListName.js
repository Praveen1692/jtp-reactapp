import React from 'react'

export default function ListName() {
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:21,
            skill:'React'
        },
        {
            id:2,
            name:'CLark',
            age:22,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:25,
            skill:'Javascript'
        }
    ]
    

  return (

    <div>

        ListName

       
        
      {
        persons.map(name =><h1>My Name is {name.name} and my age is {name.age} and my id is {name.id} and my skill is {name.skill}</h1>)
      
      }

     



    </div>
  )
}
