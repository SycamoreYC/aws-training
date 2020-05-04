import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [userList, setUserList] = useState([])
  
  useEffect(() => {
    fetch("/user/1").then(res => {
      console.log(res);
      
      setUserList(res.data);
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {
            userList.map(item => <li key={item.id}>{item.userName}</li>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
