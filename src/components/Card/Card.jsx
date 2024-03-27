import PropTypes from "prop-types";
import { StyledCard, StyledCardH1, StyledCardH2, StyleCardH3, StyledLike, StyledComment } from "./StyledCard";

function Card({ title, text, image, likes, comments }) {
  return (
    <StyledCard>
      <StyledCardH1>
        <StyledCardH2>
          <h2>{title}</h2>
          <p>{text}</p>
        </StyledCardH2>
        <img src={image} alt="Placeholder" />
      </StyledCardH1>
      <StyleCardH3>
        <StyledLike>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{likes}</span>
        </StyledLike>
        <StyledComment>
          <i className="bi bi-chat-text"></i>
          <span>{comments}</span>
        </StyledComment>
      </StyleCardH3>
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
};

export default Card;
