import React, { FC, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Details from './pages/Details'
import HomePage, { ICountry } from './pages/HomePage'
import NotFound from './pages/NotFound'

const App: FC = () => { 

  const [countries, setCountries] = useState([] as ICountry[])

  return <div className='App'>    
    <Header />
    <Main>
      <Routes>
        <Route path='/' element={<HomePage countries={countries} setCountries={setCountries} />} />      
        <Route path='/country/:name' element={<Details />} />      
        <Route path='*' element={<NotFound />} />          
      </Routes>
    </Main>    
  </div>
}

export default App
