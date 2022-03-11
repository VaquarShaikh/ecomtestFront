import './App.css';
import Header from './component/layout/Header/Header.js';
import WebFont from 'webfontloader'
import React from 'react';
import Footer from './component/layout/Footer/Footer.js'
import { Outlet } from 'react-router-dom';
import Home from './component/Home/Home.js'

function App() {

    React.useEffect(()=>{
        WebFont.load({
            google:{
                families:['Roboto' , 'Droid Sans' , 'Chilanka']
            }
        })
    } , [])

 return (
    //  <Router>
    <>
    <Header/>
    {/* <Home/> */}
    {/* <Routes> */}
    <Outlet/>
    {/* <Route path = '/' component = {Home}/> */}
    {/* </Routes> */}
    <Footer/>
    </>
 );
}

export default App;
