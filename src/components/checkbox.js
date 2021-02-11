import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/colors";

const Lable = styled.label`
  color: ${colors.primaryGray};
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: -0.015rem;
`;
const Box = styled.input`
  width: 15px;
  height: 15px;
  margin: 7px;
  background-color: ${colors.primary};
`;

function Checkbox() {
  return (
    <div style={{ display: "block" }}>
      <Lable>
        <Box type="checkbox" checked="checked" />I agree to the{" "}
        <Link
          style={{ color: `${colors.primary}` }}
          to="https://www.inuhealth.com/privacy-policy"
        >
          privecy policy
        </Link>
      </Lable>
    </div>
  );
}

export default Checkbox;
