import PropTypes from "prop-types";
import { StyledButton } from "./StyledButton";

function Button({ type, text }) {
  return <StyledButton type={type}>{text}</StyledButton>;
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export { Button };
