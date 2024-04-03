import styled from "styled-components";

const StyledAuth = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  padding: 20px;
`;

const Card = styled.div`
  background-color: lightcoral;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px 50px;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export { StyledAuth, Card };
