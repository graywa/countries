import React, { FC, useState } from 'react'
import styled from 'styled-components'
import CustomSelect from './CustomSelect'
import Search from './Search'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`

const Controls: FC = () => {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')

  const options = [
    {label: 'Africa', value: 'Africa'},
    {label: 'America', value: 'America'},
    {label: 'Asia', value: 'Asia'},
    {label: 'Europe', value: 'Europe'},
    {label: 'Oceania', value: 'Oceania'},
  ]

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />    
      <CustomSelect 
        options={options} 
        placeholder='Choose a region'
        isClearable
        value={region}
        //@ts-ignore
        onChange={setRegion}
      />
    </Wrapper>
  ) 
}

export default Controls
