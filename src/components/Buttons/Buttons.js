import styled from 'styled-components';
import colors from '../../utils/colors';
// import { typography } from '../../utils/typography';

 const Button = styled.button.attrs((props) => ({
  // we can define static props
  onClick: props.runOnClick,
}))`
  font-family: tondo, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4em;
  cursor: pointer;
  color: ${colors.white};
  padding: 12px 68px;
  border-radius: 30px;
  border: none;
  outline:none;
  background: ${colors.primaryGrad};
  filter: drop-shadow(0 3px 6px #00000029);
  width: 210px;
  margin-top: 20px;
  margin-bottom:5px;
`;

export default Button;