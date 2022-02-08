import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import Info, { ICurrency, ILang } from '../components/Info'
import { searchByCountry } from '../servise'
import { IoArrowBack } from 'react-icons/io5'


export interface IFullInfoCountry {
  name: string,
  flag: string,
  languages: ILang[],
  nativeName: string,
  population: number,
  region: string,
  subRegion: string,
  capital: string,
  topLevelDomain: string[],
  currency: ICurrency[],
  borders: string[],
}

const Details: FC = () => {
  const {name} = useParams()

  const [country, setCountry] = useState(null as null | IFullInfoCountry)

  useEffect(() => {
    axios.get(searchByCountry(name))
      .then(({data}) => setCountry(data[0]))
  }, [name])
  
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  if(!country) return <h3>loading...</h3>
   
  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack size='20px' />
        back
      </Button>
      <Info {...country} />
    </div>
  ) 
}

export default Details
