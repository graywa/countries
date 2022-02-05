import React, { FC, useEffect, useState } from 'react'
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

interface IProps {
  onFilter: (search: string, region: string) => void
}

const Controls: FC<IProps> = ({onFilter}) => {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState({label: '', value: ''})
  
  const options = [
    {label: 'Africa', value: 'Africa'},
    {label: 'Americas', value: 'Americas'},
    {label: 'Asia', value: 'Asia'},
    {label: 'Europe', value: 'Europe'},
    {label: 'Oceania', value: 'Oceania'},
  ]

  useEffect(() => {
    const regionValue = region?.value || '' 
    onFilter(search, regionValue)
  }, [search, region])

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />    
      <CustomSelect 
        options={options} 
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        //@ts-ignore
        onChange={setRegion}
      />
    </Wrapper>
  ) 
}

export default Controls
