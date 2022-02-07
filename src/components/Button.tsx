import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: .5rem;
  box-shadow: var(--shadow);
  background-color: var(--colors-ui);
  color: var(--color-text);
  padding: .5rem 1rem;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
`