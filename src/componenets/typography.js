import styled, {css} from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import colors from '../utils/colors'
export const primaryFont = "tondo, sans-serif";

const FONT_WEIGHT_MODIFIERS = {
    //font-weight
    light: () => css `
        font-weight: 100;
    `,
    regular: () => css `
        font-weight: 400;  
    `,
    bold: () => css `
        font-weight: 700;
    `
};

const TEXT_COLOR_MODIFIERS = {
    purple: () => css `
        color: ${colors.primary};
    `,
    gray2: () => css `
        color: ${colors.seconderyGray};
    `,
    gray3: () => css `
        color: ${colors.lightGray};
    `,
};

const TEXT_SIZE_MODIFIERS = {
    xlarge: () => css `
        font-size: 1.25em;
        line-height: 1.4em;
        letter-spacing: -0.03em;
    `,
    large: () => css `
        font-size: 1.2em;
        line-height: 1.35em;
        letter-spacing: -0.025em;  
    `,
    normal: () => css `
        font-size: 1em;
        line-height: 1.3em;
        letter-spacing: -0.02em;
    `,
    small: () => css `
        font-size: 0.875em;
        line-height: 1.25em;
        letter-spacing: -0.015em;
    `,
    xsmall: () => css `
        font-size: 0.8em;
        line-height: 1.2em;
        letter-spacing: -0.005em;  
    ` 
};

export const MainHeader = styled.h1`
    font-family: ${primaryFont};
    font-size: 1.6em;
    line-height: 1.3em;
    letter-spacing: -0.017em;
    color: ${colors.primaryGray};
    margin: ${props => props.margin ? props.margin : 0};
    ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
`;

export const Header = styled.h2`
    font-family: ${primaryFont};
    font-size: 1.25em;
    line-height: 1.05em;
    letter-spacing: -0.018em;
    color: ${colors.primaryGray};
    margin: ${props => props.margin ? props.margin : 0};
    ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
    ${applyStyleModifiers(TEXT_COLOR_MODIFIERS)};
`;

export const SubHeader = styled.h3`
    font-family: ${primaryFont};
    font-size: 1.125em;
    line-height: 1.05em;
    letter-spacing: -0.018em;
    color: ${colors.primaryGray};
    margin: ${props => props.margin ? props.margin : 0};
    ${applyStyleModifiers(FONT_WEIGHT_MODIFIERS)};
    ${applyStyleModifiers(TEXT_COLOR_MODIFIERS)};
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
`