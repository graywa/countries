import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { IFullInfoCountry } from '../pages/Details'
import { filterByCode } from '../servise'
import { Button } from './Button'

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--colors-text);

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    gap: 4rem;    
  }
`

const ImageWrapper = styled.div`
  max-width: 600px;
  min-width: 400px;
`

const ImgFlag = styled.img`
    width: 100%
`

const InfoCountryList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  max-width: 400px;
  min-width: 300px;
  padding: 0;
  margin: 0;
  h2 {
    margin: 0 0 1rem;
  }
`

const InfoCountryItem = styled.li`
  line-height: 1.8;
`

const NeighborsWrapper = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  b {
    margin-bottom: 1rem;
  }
`

const Neighbors = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export interface ILang {
  nativeName: string
}
export interface ICurrency {
  code: string
}

interface IProps {
  name?: string,
  flag?: string,
  languages?: ILang[],
  nativeName?: string,
  population?: number,
  region?: string,
  subregion?: string,
  capital?: string,
  topLevelDomain?: string[],
  currencies?: ICurrency[],
  borders?: string[],
}

const Info: FC<IProps> = ({name, flag, languages, nativeName, capital, 
  currencies, population, region, subregion, topLevelDomain, borders}) => {

  const [neighbors, setNeighbors] = useState(null as null | string[])

  const navigate = useNavigate()

  useEffect(() => {
    if(borders?.length) {
      axios.get(filterByCode(borders))
        .then(({data}) => setNeighbors(data.map((n: IFullInfoCountry) => n.name)))
    }    
  }, [borders])
  
  return (
    <Wrapper>
      <ImageWrapper>
        <ImgFlag src={flag} alt='flag' />
      </ImageWrapper>      
      <InfoCountryList>
        <h2>{name}</h2>
        <InfoCountryItem><b>Native Name: </b> {nativeName}</InfoCountryItem>
        <InfoCountryItem><b>Population: </b> {population}</InfoCountryItem>
        <InfoCountryItem><b>Region: </b> {region}</InfoCountryItem>
        <InfoCountryItem><b>Sub Region: </b> {subregion}</InfoCountryItem>
        <InfoCountryItem><b>Capital: </b> {capital}</InfoCountryItem>
        <InfoCountryItem><b>Languages: </b> {languages?.map(l => l.nativeName).join(', ')} </InfoCountryItem>
        <InfoCountryItem><b>Currencies: </b> {currencies?.map(c => c.code).join(', ')} </InfoCountryItem>
        <InfoCountryItem><b>Top Level Domain: </b> {topLevelDomain?.[0]} </InfoCountryItem>
        <NeighborsWrapper>
          <b>Border Countries: </b>
          {
            neighbors?.length 
            ? <Neighbors>                
                {neighbors?.map(n => <Button key={n} onClick={() => navigate(`/country/${n}`)}>{n}</Button>) }
              </Neighbors> 
            : 'There is no border countries'
          }
        </NeighborsWrapper>
      </InfoCountryList>      
    </Wrapper>
  )
}

export default Info