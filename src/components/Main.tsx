import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Container } from './Container'

const Wrapper = styled.div`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 3rem 0;
  }
`
interface IProps {
  children: ReactNode
}

const Main: FC<IProps> = ({children}) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  ) 
}

export default Main
