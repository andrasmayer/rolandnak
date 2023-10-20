import React, {  useState, useRef } from "react";
const loginData = {userName:"Admin",passWord:"admin"};




export const Home = () => {

  const [userData,setUserData] = useState({userName:null,passWord:null,loginStaus:false});



  const handleUserName = (e) =>{ 
     setUserData({...userData,userName:e.target.value});
    
  }
  const handlePassword = (e) =>{  
    setUserData({...userData,passWord:e.target.value});
  }
  const handleLogIn = (e) =>{
    e.preventDefault();
    console.log(userData);
  }
    
  const LoginForm = () =>{

    

    
  
  }


  return (<div className="col-3">
    <h3>Home page</h3>
    {
      userData.loginStaus == false ? 
      
        
      <form className="p-5 border rounded bg-light">
        <h4>Kérlek jelentkezz be</h4>
        <input className="form-control" placeholder="Felhasználónév" autoComplete="off" onChange={handleUserName}/>
        <input className="form-control mt-2" placeholder="Jelszó" autoComplete="off"  type="password" onChange={handlePassword}/>
        <div className="text-center p-2">
          <button className="btn btn-primary" onClick={handleLogIn}>Belépés</button>
        </div>
      </form>
     
       : <div>Minden Oké</div>
    }


  </div>);
};
