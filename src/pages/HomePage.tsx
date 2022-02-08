import axios from 'axios'
import React, {FC, useEffect, useState} from 'react'
import Card from '../components/Card'
import Controls from '../components/Controls'
import List from '../components/List'
import { ALL_COUNTRIES } from '../servise'


export interface ICountry {
  name: string,
  capital: string,
  region: string,
  population: number,
  flags: {svg: string, png: string}
}

interface IProps {
  countries: ICountry[],
  setCountries: (data: ICountry[]) => void
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

  if(!countries.length) return <h3>loading...</h3>

  return (
    <div>
      <Controls onFilter={filterHandler} />
      <List>
        {filteredCountries.map((item: ICountry) => {
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
