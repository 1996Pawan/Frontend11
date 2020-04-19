import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './cmp/Home';
import Listing from './cmp/Listing';
import About from './cmp/About';
import Login from './cmp/Auth';
import SignUp from './cmp/SignUp';
import Success from './cmp/success';
import Failure from './cmp/failure';
import addScreen from './cmp/addScreen';
import {BrowserRouter,Route,Switch  } from 'react-router-dom';
import addMessage from './cmp/addMessage';
import auditMessage from './cmp/auditMessage';
import viewMessage from './cmp/viewMessage';
import ViewCode from './cmp/ViewCode';
import viewType from './cmp/viewType';
import ViewMessageDetails from './cmp/ViewMessageDetails';

function App() {
  return (
    <BrowserRouter>
    <div >
      <Home />
      <Route exact path='/' component={Login}></Route>
      <Route path='/signup' component={SignUp}></Route>
      <Route path='/addScreen' component={addScreen}></Route>
     
      <Route path='/addMessage' component={addMessage}></Route>
      <Route path='/viewMessage' component={viewMessage}></Route>
      <Route path='/auditMessage' component={auditMessage}></Route>
      <Route path='/viewCode' component={ViewCode}></Route>
      <Route path='/viewType' component={viewType}></Route>
      <Route path='/viewMessageDetails' component={ViewMessageDetails}></Route>
  
    </div>
    </BrowserRouter>
  );
}




export default App;
