import styled, { css } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import colors from "../../utils/colors";
import { shadows, corners } from "../../utils/effects";

const BUTTON_MODIFIERS = {
  disabled: () => css`
    background: ${colors.disabledGray};
  `,
  therapy: () => css`
    border-radius: ${corners.therapy};
    //padding: 20px 30px;
    font-size: 1.25rem;
    //line-height: 1rem;
    width: 144px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 20px 0;
  `,
  period: () => css`
    position: absolute;
    top: 80%;
    left: 25%;
  `,
  blue: () => css`
    background: ${colors.buleGrad};
  `,
  orange: () => css`
    background: ${colors.orangeGrad};
  `,
  pink: () => css`
    background: ${colors.orangePink};
  `,
};

export const Moon = styled.img`
  height: 27px;
  width: 27px;
  margin-left: 10px;
`;

export const Button = styled.button`
  font-family: "tondo", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1rem;
  cursor: pointer;
  color: ${colors.white};
  height: 50px;
  width: 185px;
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
