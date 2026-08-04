import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles/main.scss'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/nexus-fork/'>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route index element={<Home/>} path='/'></Route>
        <Route element={<About/>} path='/about'></Route>
        <Route element={<Contact/>} path='/contact'></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
