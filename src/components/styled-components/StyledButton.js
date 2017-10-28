import styled from 'styled-components'

const StyledButton = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  cursor: pointer;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
  &:hover {
    color: white;
    background: palevioletred;
  }
`

export default StyledButton