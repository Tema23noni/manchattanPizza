import React, { lazy, Suspense } from 'react';
import {  Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import MainLayout from './layouts/MainLayout';
import Preloader from './Components/Preloader/Preloader';
import LuckyPizza from './Pages/LuckyPizza';

const Main = lazy(() => import('./Pages/Main'))
const Menu = lazy(() => import('./Pages/Menu'))
const PizzaItem = lazy(() => import('./Pages/PizzaItem'))
const ShopCart = lazy(() => import('./Pages/ShopCart'))
const Contacts = lazy(() => import('./Pages/Contacts'))
const AboutUs = lazy(() => import('./Pages/AboutUs'))

function App() {

  return (
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route path='' element={
              <Suspense fallback={<Preloader/>}>
                <Main/>
              </Suspense>
            }/>
            <Route path='menu' element={
              <Suspense fallback={<Preloader/>}>
                <Menu/>
              </Suspense>
            }/>
            <Route path='aboutus' element={
              <Suspense fallback={<Preloader/>}>
                <AboutUs/>
              </Suspense>
            }/>
            <Route path='contact' element={
              <Suspense fallback={<Preloader/>}>
                <Contacts/>
              </Suspense>
            }/>
            <Route path='/pizza/:id' element={
              <Suspense fallback={<Preloader/>}>
                <PizzaItem/>
              </Suspense>
            }/>
            <Route path='/cart' element={
              <Suspense fallback={<Preloader/>}>
                <ShopCart/>
              </Suspense>
            }/>
            <Route path='/freepizza' element={
              <Suspense fallback={<Preloader/>}>
                <LuckyPizza/>
              </Suspense>
            }/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
  );
}

export default App;
