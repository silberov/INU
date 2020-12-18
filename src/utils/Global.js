import { createGlobalStyle } from 'styled-components';
import { primaryFont } from '../componenets/typography';

export const GlobalStyle = createGlobalStyle`

body {
     margin: 0;
     font-family: ${primaryFont};
}
* {
     margin: 0;
     padding: 0;
}
`;