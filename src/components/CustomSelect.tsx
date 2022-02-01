import styled from 'styled-components'
import Select from 'react-select'

const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radius)',
      padding: '.5rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '56px'
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui)'
    })
  }
})`
  width: 280px;
  border-radius: var(--radius);
  border: none;
  color: var(--colors-text);
  & > * {
    box-shadow: var(--shadow);
  }
  & * {
    color: var(--colors-text) !important;
  }
  & > div[id] {
    background-color: var(--colors-ui);
  }

`

export default CustomSelect