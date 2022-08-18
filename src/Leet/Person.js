import React from 'react'

export default function Person({person}) {
    let hello=`Hello`;
  return (
    <div>
       <h1>{hello.toUpperCase()} {person.firstName.toUpperCase()} {person.lastName.toUpperCase()}</h1>
    </div>
  )
}
