import { Input } from "../Input/Input.jsx";
import PropTypes from "prop-types";
import {
  StyledCard,
  StyledCardH1,
  StyledCardH2,
  StyleCardH3,
  StyledLike,
  StyledComment,
  StyledEdit,
} from "./StyledCard";

function Card({ title, text, image, likes, comments, edit, deleteNews }) {
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
        {edit && (
          <StyledEdit>
            <i className="bi bi-pencil"></i>
          </StyledEdit>
        )}
        {deleteNews && (
          <button onClick={deleteNews}>
            <i className="bi bi-trash"></i>
          </button>
        )}
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
  edit: PropTypes.bool,
};

export default Card;
