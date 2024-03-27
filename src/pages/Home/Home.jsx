import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import news from "../../../db";
import { StyledHome } from "./StyledHome";

function Home() {
  const chunkSize = 2; // Número de notícias por linha
  const limitedNews = news.slice(0, 4); // Limita a exibição para até 8 notícias
  const rows = Array(Math.ceil(limitedNews.length / chunkSize))
    .fill()
    .map((_, index) => index * chunkSize)
    .map((begin) => limitedNews.slice(begin, begin + chunkSize));
  return (
    <div>
      <Navbar />
      <StyledHome>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              {limitedNews.length > 0 && (
                <Card
                  title={limitedNews[0].title}
                  text={limitedNews[0].text}
                  image={limitedNews[0].image}
                  likes={limitedNews[0].likes}
                  comments={limitedNews[0].comments}
                />
              )}
            </div>
          </div>
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((newsItem, index) => (
                <div key={index} className="col-md-6">
                  <Card
                    title={newsItem.title}
                    text={newsItem.text}
                    image={newsItem.image}
                    likes={newsItem.likes}
                    comments={newsItem.comments}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </StyledHome>
    </div>
  );
}

export default Home;
