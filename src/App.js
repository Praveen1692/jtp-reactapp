
import "./App.css";
import CountReducer from "./Components/CountReducer";
import CounterOne from "./Components/CounterOne";

import React from "react";
import People from "./Components/People";
import ChangeBackground from "./Components/ChangeBackground";
import {Route,Routes} from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";

import { NavBar } from "./Components/NavBar";
import { OrderSummary } from "./Components/OrderSummary";
import { NoMatch } from "./Components/NoMatch";
import { Prosuct } from "./Components/Prosuct";
import { User } from "./Components/User";
import { UserDetails } from "./Components/UserDetails";
import { Admin } from "./Components/Admin";
import ParentComponents from "./Components/ParentComponents";
import GreetingUser from "./Components/GreetingUser";
import ListName from "./Components/ListName";
import Raf from "./Components/Raf";
import Header from "./Components/Header";
import BarNav from "./Components/BarNav";






function App() {

  

 


  
 

 
// hi
  return (

   
   
  
  <>

  <h1>Hello</h1>
  
 



 

  
  
  



  

   





  <Routes>
    <Route path='/' element={<Home />}></Route>

    <Route path='about' element={<About />}></Route>
    <Route path='order-summary' element={<OrderSummary />}></Route>
    <Route path='*' element={<NoMatch />}></Route>

    <Route path='Product' element={<Prosuct />}></Route>
    <Route path='User' element={<User />}></Route>

    <Route path='User/:userId' element={<UserDetails />}></Route>

    <Route path='admin' element={<Admin />}></Route>





   
   

   
  </Routes>
  
  
  
  
  
  
  
  
  
  
  </>
 

  
  
    
    

  

   

    
   
   

 
  
  

  

  
  
   

   
  

   

  


  
   


    
  );
}

export default App;
