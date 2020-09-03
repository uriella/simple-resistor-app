import styled from 'styled-components';

const Colour =  styled.button.attrs(props=> ({
  onClick: props.onClick,
  children: props.text
}))`
  cursor: pointer;
  height: 2rem;
  min-width: ${props => props.minWidth}rem;
  margin: 0.5rem;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.7rem 1.2rem -0.5rem rgba(0,0,0,0.5);
  color: ${props => props.textColour};
  background-color: ${props => props.colour};

  &:hover{
    transform: translate(-0.1rem, -0.1rem);
  }
`;

export default Colour;