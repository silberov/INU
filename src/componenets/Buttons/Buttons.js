import styled, {css} from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import colors from '../../utils/colors';
import { shadows, corners } from '../../utils/effects';

// const TherapyDiv =  styled.button`
//     background: ${colors.primaryGrad};
//     border: none;
//     border-radius: 14px;
//     padding: 20px;
//     font-size: 1.25em;
// `;


const BUTTON_MODIFIERS = {
  disabled: () => css `
    background: ${colors.disabledGray};
  `,
  therapy: () => css`
    border-radius: ${corners.therapy};
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  `,
  blue: () => css`
    background: ${colors.buleGrad};
  `,
  orange: () => css `
    background: ${colors.orangeGrad};
  `,
}

 const Button = styled.button`
  font-family: 'tondo', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4em;
  cursor: pointer;
  color: ${colors.white};
  padding: 12px 68px;
  border-radius: ${corners.button};
  border: none;
  background: ${colors.primaryGrad};
  filter: ${shadows.button};
  &:focus {
    outline: none;
  }
  &:hover {
    outline: none;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export default Button;