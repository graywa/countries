import React, { FC, useEffect, useState } from 'react'
import moon from '../accets/img/moon.svg'
import moonOut from '../accets/img/moon-outline.svg'
import styled from 'styled-components'
import { Container } from './Container'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.div`
  background-color: var(--colors-ui);
  box-shadow: var(--shadow);
`
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;
`

const HeaderTitle = styled(Link).attrs({
  to: '/'
})`
  transition: all .5s linear; 
 
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }  
`

const HeaderTogleTheme = styled.div`
  display: flex;
  align-items: center;
  transition: all .5s linear;

  text-transform: capitalize;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const ThemeIcon = styled.img` 
  margin-right: .5rem; 
`

const Header: FC = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {    
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toggleHandler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <HeaderTitle>
            Where is the world?
          </HeaderTitle>
          <HeaderTogleTheme onClick={toggleHandler}>
            <ThemeIcon width={20} src={theme === 'light' ? moonOut : moon} alt="theme" />
            {theme} Mode
          </HeaderTogleTheme>
        </HeaderContent>        
      </Container>      
    </HeaderWrapper>
  )
}

export default Header
