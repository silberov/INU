import styled from 'styled-components';
import colors from '../../utils/colors';


//const DisabledButton = styled.{Button}

 const Button = styled.button`
  font-family: tondo, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4em;
  cursor: pointer;
  color: ${colors.white};
  padding: 12px 68px;
  border-radius: 30px;
  border: none;
  background: ${colors.primaryGrad};
  filter: drop-shadow(0 3px 6px #00000029);
  &:focus {
    outline: none;
  }
  &:hover {
    outline: none;
  }
`;

export default Button;