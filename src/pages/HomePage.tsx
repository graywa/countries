import axios from 'axios'
import React, {FC, useEffect, useState} from 'react'
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

  const [filteredCountries, setFilteredCountries] = useState(countries)

  const filterHandler = (search: string, region: string) => {
    let data = [...countries]

    if(search) {
      data = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(region) {
      data = data.filter(item => item.region.includes(region) )
    }

    setFilteredCountries(data)
  }

  useEffect(() => {
    if(!countries.length) {
      axios.get(ALL_COUNTRIES)
      .then(response => setCountries(response.data))
    }    
  }, [])

  return (
    <div>
      <Controls onFilter={filterHandler} />
      <List>
        {filteredCountries.map((item: ICountrie) => {
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
