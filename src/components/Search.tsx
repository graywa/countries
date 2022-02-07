import React, { FC } from 'react'
import styled from 'styled-components'
import { IoSearch } from 'react-icons/io5'

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

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'search a country...'  
})`
  width: 100%;
  margin-left: .75rem;

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
      <IoSearch size='20px' />
      <Input value={search} onChange={e => setSearch(e.target.value)} />
    </SearchWrapper>
  )
}

export default Search
