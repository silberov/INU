import styled, { css } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import colors from "../utils/colors";
export const primaryFont = "tondo, sans-serif";

const ALIGNMENT_MODIFIERS = {
  center: () => css`
    text-align: center;
  `,
};

const FONT_WEIGHT_MODIFIERS = {
  //font-weight
  light: () => css`
    font-weight: 100;
  `,
  regular: () => css`
    font-weight: 400;
  `,
  bold: () => css`
    font-weight: 700;
  `,
};

const TEXT_COLOR_MODIFIERS = {
  purple: () => css`
    color: ${colors.primary};
  `,
  gray2: () => css`
    color: ${colors.seconderyGray};
  `,
  gray3: () => css`
    color: ${colors.lightGray};
  `,
};

const TEXT_SIZE_MODIFIERS = {
  xlarge: () => css`
    font-size: 1.25rem;
    line-height: 1.4rem;
    letter-spacing: -0.03rem;
  `,
  large: () => css`
    font-size: 1.2rem;
    line-height: 1.35rem;
    letter-spacing: -0.025rem;
  `,
  normal: () => css`
    font-size: 1rem;
    line-height: 1.3rem;
    letter-spacing: -0.02rem;
  `,
  small: () => css`
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: -0.015rem;
  `,
  xsmall: () => css`
    font-size: 0.8rem;
    line-height: 1.2rem;
    letter-spacing: -0.005rem;
  `,
};
const NAV_BAR_MODIFIERS = {
  nav: () => css`
    position: relative;
    top: -3px;
  `,
};

export const MainHeader = styled.h1`
  font-family: ${primaryFont};
  font-size: 1.625rem;
  line-height: 1.3em;
  letter-spacing: -0.017em;
  color: ${colors.primaryGray};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
  ${applyStyleModifiers(ALIGNMENT_MODIFIERS)};
`;

export const Header = styled.h2`
  font-family: ${primaryFont};
  font-size: 1.25rem;
  line-height: 1.05em;
  letter-spacing: -0.018em;
  color: ${colors.primaryGray};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
  ${applyStyleModifiers(TEXT_COLOR_MODIFIERS)};
  ${applyStyleModifiers(ALIGNMENT_MODIFIERS)};
`;

export const SubHeader = styled.h3`
  font-family: ${primaryFont};
  font-size: 1.125rem;
  line-height: 1.05em;
  letter-spacing: -0.018em;
  color: ${colors.primaryGray};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
  ${applyStyleModifiers(TEXT_COLOR_MODIFIERS)};
  ${applyStyleModifiers(ALIGNMENT_MODIFIERS)};
`;

export const P = styled.p`
  padding: 0;
  margin: 0;
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1em;
  color: ${colors.primaryGray};
  ${applyStyleModifiers(TEXT_SIZE_MODIFIERS)};
  ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
  ${applyStyleModifiers(TEXT_COLOR_MODIFIERS)};
  ${applyStyleModifiers(NAV_BAR_MODIFIERS)};
`;

export const CustomInput = styled.input.attrs((props) => ({
  // we can define static props
  type: props.type,
  onChange: (e) => props.saveInput(e.target.value),
  // or we can define dynamic ones
  placeholder: props.placeholder,
}))`
  margin-top: 50px;
  background: transparent;
  border: none;
  border-bottom: 1px ${colors.seconderyGray} solid;
  place-items: center;
  width: 200px;
  text-align: left;
  outline: transparent;
  font-size: large;
`;

export const FormContainer = styled.div`
  margin-top: 200px;
  display: grid;
  text-align: center;
  justify-content: center;
  align-content: center;
  max-width: 250px;
`;

export const LogoHomePage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35%;
  margin-bottom: 20%;
`;

export const BottomPattern = styled.img`
  width: 200;
  margin-top: 100px;
`;

export const BottomPatternCropped = styled.img`
  width: 100%;
  margin-bottom: 0px;
`;

export const TopCorner = styled.img`
  width: 50%;
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const GoBack = styled.img`
  position: absolute;
  top: 35px;
  left: 40px;
`;

export const Cross = styled.img`
  position: absolute;
  top: 35px;
  left: 40px;
`;
