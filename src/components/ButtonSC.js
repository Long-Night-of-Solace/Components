import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0 1em;
  padding: 0.25em 1em;

${props =>
    props.$primary &&
    css`
      background: #BF4F74;
      color: white;
       `}

${props =>
    props.$secondary &&
    css`
      background: white;
      color: #BF4F74;
       `}

${props =>
    props.$rounded &&
    css`
    border-radius: 25px;
       `}
`

export const DeleteButton = styled(Button) `
    background: red;
    color: white;
`;

export default Button;