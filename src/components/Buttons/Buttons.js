import styled, { css } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import colors from "../../utils/colors";
import { shadows, corners } from "../../utils/effects";

// const TherapyDiv =  styled.button`
//     background: ${colors.primaryGrad};
//     border: none;
//     border-radius: 14px;
//     padding: 20px;
//     font-size: 1.25em;
// `;

const BUTTON_MODIFIERS = {
  disabled: () => css`
    background: ${colors.disabledGray};
  `,
  therapy: () => css`
    border-radius: ${corners.therapy};
    //padding: 20px 30px;
    width: 144px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 20px 0;
  `,
  blue: () => css`
    background: ${colors.buleGrad};
  `,
  orange: () => css`
    background: ${colors.orangeGrad};
  `,
};

export const Moon = styled.img`
  height: 27px;
  width: 27px;
  margin-left: 10px;
`;

export const Button = styled.button.attrs((props) => ({
  // we can define static props
  onClick: props.runOnClick,
}))`
  font-family: "tondo", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3em;
  line-height: 1.13em;
  cursor: pointer;
  color: ${colors.white};
  padding: 12px 68px;
  margin: 20px auto;
  border-radius: ${corners.button};
  border: none;
  outline: none;
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
