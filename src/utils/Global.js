import { createGlobalStyle } from 'styled-components';
import { primaryFont } from './typography';

export const GlobalStyle = createGlobalStyle`

body {
     margin: 0;
     font-family: ${primaryFont}
}
`;