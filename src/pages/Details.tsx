import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import Info, { ICurrency, ILang } from '../components/Info'
import { searchByCountry } from '../servise'
import { IoArrowBack } from 'react-icons/io5'


interface IFullInfoCountrie {
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

  const [countrie, setCountrie] = useState(null as null | IFullInfoCountrie)
  console.log(countrie)

  useEffect(() => {
    axios.get(searchByCountry(name))
      .then(({data}) => setCountrie(data[0]))
  }, [name])
  
  const navigate = useNavigate()

  const goBack = () => navigate(-1)
   
  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack size='20px' />
        back
      </Button>
      <Info {...countrie} />
    </div>
    
  ) 
}

export default Details
