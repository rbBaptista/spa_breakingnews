import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { StyledHome } from "./StyledHome";
import { getNews } from "../../Services/NewsService";
import textLimit from "../../components/textLimit/textLimit";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getAllNews() {
      try {
        const response = await getNews();
        setNews(response.data.news);
      } catch (error) {
        console.error(error);
      }
    }

    getAllNews();
  }, []);

  const chunkSize = 2; // Número de notícias por linha
  const featuredNews = news[0]; // Primeira notícia para destaque
  const otherNews = news.slice(1, 5); // Outras notícias
  const rows = Array(Math.ceil(otherNews.length / chunkSize))
    .fill()
    .map((_, index) => index * chunkSize)
    .map((begin) => otherNews.slice(begin, begin + chunkSize));

  return (
    <div>
      <StyledHome>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              {featuredNews && (
                <Card
                  title={featuredNews.title}
                  text={textLimit(featuredNews.text, 300)}
                  image={featuredNews.image}
                  likes={featuredNews.likes}
                  comments={featuredNews.comments.length}
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
                    text={textLimit(newsItem.text, 165)}
                    image={newsItem.image}
                    likes={newsItem.likes}
                    comments={newsItem.comments.length}
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
