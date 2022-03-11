import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import App from './App';
import Home from './component/Home/Home.js'
import About from './component/about.js'
import {Provider} from 'react-redux'
import store from './store'
import Loader from './component/Loader/Loader';
import {positions , transitions , Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import ProductDetails from './component/Product/ProductDetails.js'

const options={
  timeout:5000,
  positions:positions.BOTTOM_CENTER,
  transition:transitions.SCALE,
}

ReactDOM.render(
  <Provider store = {store} >
    <BrowserRouter>
    <Routes>
      
      <Route path = '/' element = 
      
      {<AlertProvider template={AlertTemplate} {...options}>
      <App  />
      </AlertProvider>
    }
      >
         <Route index element = {<Home/>}/>
         <Route path = '/product/:id' element={<ProductDetails/>} />
         {/* <Route path = '/sad' element = {<Loader/>} /> */}
         {/* <Route path = '/about' element = {<About/>}/> */}
         </Route>
      
    </Routes>
    </BrowserRouter>
    
  </Provider>,
  document.getElementById('root')
);
