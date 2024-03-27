import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #0bade3;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 1rem;
  font-family: Roboto, arial;
  width: auto;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  :hover {
    background-color: #0a86af;
  }
`;
export { StyledButton };
