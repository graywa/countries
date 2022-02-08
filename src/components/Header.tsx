import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { Link } from 'react-router-dom'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'


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
  color: var(--colors-text);
  transition: all .5s linear; 
  text-decoration: none;
 
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
          <HeaderTitle>Where is the world?</HeaderTitle>
          <HeaderTogleTheme onClick={toggleHandler}>
            {
            theme === 'light'
            ? <IoMoonOutline size='20px' />
            : <IoMoon size='20px' />
            }
            <span style={{marginLeft: '.5rem'}} >{theme} Mode</span> 
          </HeaderTogleTheme>
        </HeaderContent>        
      </Container>      
    </HeaderWrapper>
  )
}

export default Header
