import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Controls from './components/Controls'
import Header from './components/Header'
import List from './components/List'
import Main from './components/Main'
import { ALL_COUNTRIES } from './servise'

export interface ICountrie {
  name: string,
  capital: string,
  region: string,
  population: number,
  flags: {svg: string, png: string}
}

const App: FC = () => {
  const [countries, setCountries] = useState([] as ICountrie[])

  useEffect(() => {
    axios.get(ALL_COUNTRIES)
      .then(response => setCountries(response.data))
  }, [])

  return <div className='App'>    
    <Header />
    <Main>
      <Controls />
      <List>
        {countries.map((item: ICountrie) => {
          return <Card 
                    key={item.name}
                    img={item.flags.png}
                    name={item.name} 
                    info={[
                      {title: 'Capital', description: item.capital},
                      {title: 'Region', description: item.region}, 
                      {title: 'Population', description: item.population.toLocaleString()}
                    ]}
          ></Card>
        })}
      </List>
    </Main>    
  </div>
}

export default App
