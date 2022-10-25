import styled from 'styled-components';

export const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonItem = styled.li`
  margin-right: ${props => props.theme.space[5]}px;
`;

export const Button = styled.button`
  cursor: pointer;
  text-align: center;
  border-radius: ${props => props.theme.radii.normal};
  border: none;
  background-color: ${props => {
    if (props.name === 'good') {
      return props.theme.colors.green;
    }
    if (props.name === 'neutral') {
      return props.theme.colors.orange;
    }
    if (props.name === 'bad') {
      return props.theme.colors.red;
    }
  }};
  width: 80px;
  padding: ${props => props.theme.space[3]}px;
  :hover {
    background-color:${props => props.theme.colors.darkGrey};
    color: ${props => props.theme.colors.white};
  }
`;