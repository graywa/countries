import React, { FC } from 'react'
import styled from 'styled-components'
import searchIcon from '../accets/img/search-outline.svg'

interface IProps {
  search: string,
  setSearch: (search: string) => void
}

const SearchWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow);
  border-radius: var(--radius);

  max-width: 280px;
  padding: 1rem 1.8rem;
  background-color: var(--colors-ui);

  @media (min-width: 767px) {
    margin-bottom: 0;
  }
`

const SearchIcon = styled.img`
  margin: 0 .5rem;
`

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'search a country...'
})`
  width: 100%;

  color: var(--colors-text);
  background-color: var(--colors-ui);
  outline: none;
  border: none;
  
  font-family: var(--font-family);
  font-size: var(--fs-sm);
`

const Search: FC<IProps> = ({search, setSearch}) => {
  return (
    <SearchWrapper>
      <SearchIcon width={20} src={searchIcon} alt="search" /> 
      <Input value={search} onChange={e => setSearch(e.target.value)} />
    </SearchWrapper>
  )
}

export default Search
