

import {useState} from 'react'

function Hello() {
    const[name,setName]=useState("Praveen");

    const changeName=()=>{

       



        if(name=="Praveen"){
            setName("Sharma");
        }
        else{
            setName("Praveen");
        }


    };

    

  return (


    <div>
        <h1>Hello {name} sir in the gm </h1>
        <button onClick={changeName}>click me</button>

    </div>





  )




}



export default Hello;
