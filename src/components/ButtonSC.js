import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3B82F6;
  color: #3B82F6;
  margin: 0 1em;
  padding: 0.25em 1em;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  
${props =>
    props.$primary &&
    css`
      background: #3B82F6;
      color: white;
       `}

${props =>
    props.$secondary &&
    css`
      background: white;
      color: #3B82F6;
       `}

${props =>
    props.$rounded &&
    css`
    border-radius: 25px;
       `}
`

export const DeleteButton = styled(Button) `
    background: #cc0000;
    border: 2px solid #cc0000;
    color: white;
`;

const getBackgroundColor = ($color) => {

    switch ($color){
    case 'cyan':
        return "#00FFFF";
    case 'yellow':
        return '#FFFF00';
    default:
        return '#3B82F6';
    }
};
export const CustomColoredButton = styled(Button) `
    background: ${props => getBackgroundColor(props.$color)};
    border: 2px solid ${props => getBackgroundColor(props.$color)};
`;
