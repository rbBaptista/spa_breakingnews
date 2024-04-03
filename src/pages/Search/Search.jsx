import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNewsByTitle } from "../../Services/NewsService.js";
import Card from "../../components/Card/Card.jsx";
import textLimit from "../../components/textLimit/textLimit";
import { StyledSearch } from "./StyledSearch.jsx";

function Search() {
  const { title } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await getNewsByTitle(title);
        console.log(response.data);
        setNews(response.data);
      } catch (error) {
        setNews([]);
        // Aqui você pode definir o estado de um erro, se tiver um, para exibir uma mensagem de erro ao usuário
      }
    }

    fetchNews();
  }, [title]); // Include title in the dependency array

  return (
    <StyledSearch>
      {console.log(news)}
      {news.map((newsItem, index) => (
        <Card
          key={index}
          title={newsItem.title}
          text={textLimit(newsItem.text, 300)}
          image={newsItem.image}
          likes={newsItem.likes}
          comments={newsItem.comments.length}
        />
      ))}
    </StyledSearch>
  );
}

export default Search;
