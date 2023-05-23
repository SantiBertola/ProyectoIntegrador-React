import React from 'react'
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound'
import CardsProducts from '../components/Productos/CardsProducts';


const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path='/' element={ <Home />} />
      <Route path='/register' element= { <Register />} />
      <Route path='/login' element={ <Login /> }></Route>
      <Route path='/productos' element= { <CardsProducts /> } />


      <Route path='*' element={<NotFound />} />
    </ReactDomRoutes>
  )
}

export default Routes