import styled from 'styled-components'

const StyledGameControls = styled.div` 
  padding: 14px;
  background-color: #084075;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  
  ul {
    display: flex;
    justify-content: space-around;
    padding: 0;
  
    li {
      list-style: none;
      cursor: pointer;
      font-size: 1.4em;
      border-radius: 50%;
      
      &:hover {
        opacity: .7;
      }
    }
  }
`

export default StyledGameControls