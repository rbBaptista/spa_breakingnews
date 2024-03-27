import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import news from "../../../db";
import { StyledHome } from "./StyledHome";

function Home() {
  return (
    <div>
      <Navbar />
      <StyledHome>
        <div>
          {news.map((newsItem, index) => (
            <Card
              key={index}
              title={newsItem.title}
              text={newsItem.text}
              image={newsItem.image}
              likes={newsItem.likes}
              comments={newsItem.comments}
            />
          ))}
        </div>
      </StyledHome>
    </div>
  );
}

export default Home;
