import axios from 'axios'
import React, {FC, useEffect} from 'react'
import Card from '../components/Card'
import Controls from '../components/Controls'
import List from '../components/List'
import { ALL_COUNTRIES } from '../servise'


export interface ICountrie {
  name: string,
  capital: string,
  region: string,
  population: number,
  flags: {svg: string, png: string}
}

interface IProps {
  countries: ICountrie[],
  setCountries: (data: ICountrie[]) => void
}

const HomePage: FC<IProps> = ({countries, setCountries}) => {


  useEffect(() => {
    if(!countries.length) {
      axios.get(ALL_COUNTRIES)
      .then(response => setCountries(response.data))
    }    
  }, [])

  return (
    <div>
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
          />            
        })}
      </List>
    </div>
  ) 
}

export default HomePage
