import styled from 'styled-components';
import colors from './colors'
export const primaryFont = "tondo, sans-serif";

// export const typography = {
//     h1: '1.6em',
//     sub: '1.2em',
//     h2: '1.2em',
//     paragraph: '1.2em',
//     button: '1.35em'
// };


export const H1 = styled.h1`
    font-family: ${primaryFont};
    font-size: 1.6em;
    line-height: 1.3em;
    letter-spacing: -0.017em;
    color: ${props => props.color ? props.color : colors.primaryGray};
    margin: ${props => props.margin ? props.margin : 0};
`;

export const H2 = styled.h2`
    font-family: ${primaryFont};
    font-size: 1.25em;
    line-height: 1.05em;
    letter-spacing: -0.018em;
    font-weight: ${props => {
        switch (props.wight) {
            case "light":
                return "100"
            case "regular":
                return "400"
            case "bold":
                return "700"
            default:
                return "400"
        }
    }};
    color: ${props => props.color ? props.color : colors.primaryGray};
    margin: ${props => props.margin ? props.margin : 0};
`;

export const H3 = styled.h3`
    font-family: ${primaryFont};
    font-size: 1.125em;
    line-height: 1.05em;
    letter-spacing: -0.018em;
    font-weight: ${props => {
        switch (props.wight) {
            case "light":
                return "100"
            case "regular":
                return "400"
            case "bold":
                return "700"
            default:
                return "400"
        }
    }};
    color: ${props => props.color ? props.color : colors.primaryGray};
    margin: ${props => props.margin ? props.margin : 0};
`;

export const P = styled.p`
    font-family: ${primaryFont};
    font-weight: ${props => {
        switch (props.wight) {
            case "light":
                return "100"
            case "regular":
                return "400"
            case "bold":
                return "700"
            default:
                return "400"
        }
    }};
    font-size: ${props => {
        switch (props.size) {
            case "xlarge":
                return "1.125em"
            case "large":
                return "1.2em"
            case "normal":
                return "1em"
            case "small":
                return "0.875em"
            case "xsmall":
                return "0.8em"
            default:
                return "1em"
        }
    }};
    line-height: ${props => {
        switch (props.size) {
            case "xlarge":
                return "1.4em"
            case "large":
                return "1.35em"
            case "normal":
                return "1.3em"
            case "small":
                return "1.35em"
            case "xsmall":
                return "1.2em"
            default:
                return "1.3em"
        }
    }};
    letter-spacing: ${props => {
        switch (props.size) {
            case "xlarge":
                return "1.3em"
            case "large":
                return "-0.025em"
            case "normal":
                return "-0.02em"
            case "small":
                return "-0.015em"
            case "xsmall":
                return "-0.005em"
            default:
                return "-0.02em"
        }
    }};
    color: ${props => props.color ? props.color : colors.primaryGray}
`