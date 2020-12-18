import styled from 'styled-components';
import colors from '../../utils/colors';
import { P } from '../../componenets/typography'

const TherapyDiv =  styled.button`
    background: ${colors.primaryGrad};
    border: none;
    border-radius: 14px;
    padding: 20px;
    font-size: 1.25em;
`;


function TherapyItem() {
    return(
        <TherapyDiv>
            day 1
        </TherapyDiv>
    );
}

export default TherapyItem;