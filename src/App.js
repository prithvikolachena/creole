
import React, { useState } from 'react';


import Customer from './Customer';
import ReactDOM from 'react-dom';
const App = () => {

   const [username, setuserName] = useState('');
   const [password, setPassword] = useState('');

   const handle = () => {
      localStorage.setItem('userName', username);
      localStorage.setItem('Password', password);
      validate(username, password);
      
      
   };
   const remove = () => {
      localStorage.removeItem('userName');
      localStorage.removeItem('Password');
   };
   
  //  var outputName = document.getElementById("username");
  //  var outputPass = document.getElementById('password');
   const validate = () => {
    // var outputName = localStorage.getItem('username');
    // var outputPass = localStorage.getItem('password');

    if(username == "admin" && password == "pass"){
          <Customer />
          alert('logged in as admin')
          
      
    }else if(username == "customer" && password == "passed"){
      alert('logged in as customer');
    }else if(username == "manager" && password == "passing") {
      alert('logged in as manager');
    } else {
      alert('Not Authorized');
    }

   }

   
   

   return (
      <div className="App">
         <h1>Login</h1>
         <input
            placeholder="username"
            value={username}
            onChange={(e) => setuserName(e.target.value)}
         />
         <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         
            <button onClick={handle}>Login</button>
         
         
         <>
            <button onClick={remove}>Remove</button>
         </>
      </div>
    
   );
};
export default App;

