import { createGlobalStyle } from 'styled-components';
import { primaryFont } from '../components/typography';

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