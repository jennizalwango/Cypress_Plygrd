import React from 'react';
import {useNavigate} from 'react-router-dom';


const Dashboard = ()=> {
  const history= useNavigate()
  const hanldeLogout = () =>{
    history('/login');
  }
  return(
    <div>
      Welcome to the Homepage <br/>
      <input type="button" onClick={hanldeLogout} value="logout"/>
    </div>
  );
}

export default Dashboard;