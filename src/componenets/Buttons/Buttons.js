import styled from 'styled-components';
import colors from '../../utils/colors';
import { typography } from '../../utils/typography';

 const Button = styled.button`
  font-family: tondo, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${typography.button};
  cursor: pointer;
  color: ${colors.white};
  padding: 12px 68px;
  border-radius: 30px;
  border: none;
  background: ${colors.primary};
  filter: drop-shadow(0 3px 6px #00000029);
`;

export default Button;