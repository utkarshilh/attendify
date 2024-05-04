import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import IsClassSelected from './Components/Conditional/IsClassSelected';
import Landingpage from './Components/Dashboard/Landingpage';
import Login from './Components/LoginPage/Login';





import Main from './Components/Attendence/Main';

import Navbar from './Components/Dashboard/Navbar';
// import SelectClass from './Components/Attendence/SelectClass';




function App() {
  const [currUser, setCurrUser] = useState('');
  const [userType, setUserType] = useState('');

  const changeUser = ({ user, type }) => {
    setCurrUser(user);
    setUserType(type);
  }



  return (
    <div className="App">
      {/* <IsClassSelected /> */}
      {/* <Landingpage /> */}

      {(currUser === '') ? <Login changeUser={changeUser} /> : <Landingpage />}

    </div>
  );
}

export default App;
