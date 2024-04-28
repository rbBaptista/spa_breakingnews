import styled from "styled-components";

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;

  img {
    width: 30%;
    height: auto;
  }
`;

const StyledCardH1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledCardH2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-weight: bold;
  }
`;

const StyleCardH3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  gap: 1.5rem;
`;

const StyledLike = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

const StyledComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

const StyledEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

export { StyledCard, StyledCardH1, StyledCardH2, StyleCardH3, StyledLike, StyledComment, StyledEdit };
