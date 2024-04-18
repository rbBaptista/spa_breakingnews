import styled from "styled-components";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export { StyledProfile, CardProfile, Form };
