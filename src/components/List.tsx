import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 2rem 0;
  gap: 2.5rem;
  
  @media (min-width: 767px) {
    padding: 3rem 0;
  }
`

interface IProps {
  children: ReactNode
}

const List: FC<IProps> = ({children}) => {
  return <Wrapper>{children}</Wrapper>
}

export default List
