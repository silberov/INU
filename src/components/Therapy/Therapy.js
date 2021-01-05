import styled from 'styled-components';
import colors from '../../utils/colors';
import { P, SubHeader } from '../typography';
import Button from '../Buttons/Buttons';
import { moons } from './moons';

const SectionWraper = styled.div`
    max-width: 800px;
    margin: auto;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;

const TherapyWraper = styled.div`
padding: 35px;
text-align:left;
`;

function Therapy() {
    return(
        <TherapyWraper>
             <SubHeader margin={"30px auto 10px auto"}>First Quarter</SubHeader>
        <SectionWraper>
            <Button modifiers={['therapy']}>day 1<img src={moons[1]} alt="*" style={{hight: "27px", width: "27px", marginLeft: "20px"}}/></Button>
            <Button modifiers={['therapy']}>day 2<img src={moons[2]} alt="*" style={{hight: "27px", width: "27px", marginLeft: "20px"}}/></Button>
            <Button modifiers={['therapy']}>day 3<img src={moons[3]} alt="*" style={{hight: "27px", width: "27px", marginLeft: "20px"}}/></Button>
            <Button modifiers={['therapy']}>day 4<img src={moons[5]} alt="*" style={{hight: "27px", width: "27px", marginLeft: "20px"}}/></Button>
            <Button modifiers={['therapy']}>day 5<img src={moons[6]} alt="*" style={{hight: "27px", width: "27px", marginLeft: "20px"}}/></Button>
            <Button modifiers={['therapy']}>day 6<img src={moons[7]} alt="*" style={{hight: "27px", width: "27px", marginLeft: "20px"}}/></Button>
        </SectionWraper>
        </TherapyWraper>
    );
}

export default Therapy;