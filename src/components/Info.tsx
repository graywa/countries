import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--colors-text);

  @media (min-width: 767px) {
    flex-direction: row;
    gap: 2rem;
  }
  @media (min-width: 1024px) {
    gap: 4rem
  }
`

const ImgFlag = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 400px;
  @media (min-width: 1024px) {
    max-width: 600px;
  }

`

const InfoCountryList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;

`

const InfoCountrieItem = styled.li`
  line-height: 1.8;
`

export interface ILang {
  nativeName: string
}
export interface ICurrency {
  code: string
}
export interface IBorder {

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

  
  return (
    <Wrapper>
      <ImgFlag src={flag} alt='flag' />
      <InfoCountryList>
        <h2>{name}</h2>
        <InfoCountrieItem><b>Native Name: </b> {nativeName}</InfoCountrieItem>
        <InfoCountrieItem><b>Population: </b> {population}</InfoCountrieItem>
        <InfoCountrieItem><b>Region: </b> {region}</InfoCountrieItem>
        <InfoCountrieItem><b>Sub Region: </b> {subregion}</InfoCountrieItem>
        <InfoCountrieItem><b>Capital: </b> {capital}</InfoCountrieItem>
        <InfoCountrieItem><b>Languages: </b> {languages?.map(l => l.nativeName).join(', ')} </InfoCountrieItem>
        <InfoCountrieItem><b>Currencies: </b> {currencies?.map(c => c.code).join(', ')} </InfoCountrieItem>
        <InfoCountrieItem><b>Top Level Domain: </b> {topLevelDomain?.[0]} </InfoCountrieItem>
        <InfoCountrieItem><b>Borders: </b> {borders?.map(b => b).join(', ')} </InfoCountrieItem>
      </InfoCountryList>
    </Wrapper>
  )
}

export default Info