import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.article`
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  background-color: var(--colors-bg);
  width: 260px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  overflow: hidden;
`

const Flag = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);  
`

const CardContent = styled.div`
  padding: 1.5rem 1.5rem 2rem;
`

const CardName = styled.h3`
  margin: 0 0 1rem;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`

const CardInfo = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  
`

const CardInfoItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
`

interface IInfo {
  title: string,
  description: string
}

interface IProps {
  img: string,
  name: string,  
  info: IInfo[]  
}

const Card: FC<IProps> = ({img, name, info = []}) => {
  const navigate = useNavigate()

  return (
    <Wrapper onClick={() => navigate(`/country/${name}`)}>
      <Flag src={img} alt='flag'/>
      <CardContent>
        <CardName>{name}</CardName>
        <CardInfo>
          {info.map((item,index) => {
            return <CardInfoItem key={index}>
              <b>{item.title}:</b> {item.description}
            </CardInfoItem>
          })}          
        </CardInfo>
      </CardContent>
    </Wrapper>
  ) 
}

export default Card
