import React from "react";
import { StyledInput } from "./StyledInput";

const Input = React.forwardRef((props, ref) => <StyledInput ref={ref} {...props} />);
Input.displayName = "Input";

export { Input };
