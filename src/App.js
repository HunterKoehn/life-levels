import React, { useState } from 'react';
import './App.css';
import { Login } from './components/login'
import { Register } from './components/register'

function App() {
  const [currForm, setCurrForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrForm(formName);
  }

  return (
    <div className="App">
      {
        currForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;