import React, {useEffect,useState} from 'react'






function Todo() {
    const[windowidth,setwindowwidth]=useState(window.innerWidth);

    const handleResize=()=>{
        setwindowwidth(window.innerWidth);
    }



    useEffect(()=>{

        window.addEventListener('resize',handleResize)
    
    
       },[]);

   
  


   


  return (

    <>



    <div>

     <h1>{windowidth}</h1>
      

     

       





    </div>




    <h1> Hello World</h1>
    <h2>Hello Worls 2</h2>
    


    </>
    



  )



}







export default Todo;

