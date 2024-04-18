import PropTypes from "prop-types";
import { StyledButton } from "./StyledButton";

function Button({ text, onClick, type = "button" }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export { Button };
