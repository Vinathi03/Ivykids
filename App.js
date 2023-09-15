//import logo from './logo.svg';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

//import Login from './components/login.component'
//import SignUp from './components/signup.component'

import Login from './components/login.componet';
import SignUp from './components/signup.component';

import { ThemeProvider } from '@mui/material';
// import { Grid, Hidden, Paper } from "@material-ui/core";
import MainPage from './components/timeline.component';
import RightSide from './components/rightside';
import LeftSide from './components/leftblock';

function App() {
  
  return (
    <>
    
         <div style={{backgroundColor:'white'}}> 
            <div className="InfoPannel">
              <LeftSide/>
            </div>
            <div className="MiddleBlock">
            <nav class="navbar sticky-top navbar-light ml-5">
             
              <a class="navbar-brand ml" href="#">Home</a>
              
            </nav>
              <MainPage/>
            </div>
            <div className="followBlock" style={{padding:10}}>
              <RightSide />
            </div>
            </div>
    </>
  
  );

}

export default App;
