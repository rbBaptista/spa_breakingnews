import { UserContext } from "../../context/UserContext";
import { useContext, useState, useEffect } from "react";
import { StyledProfile, CardProfile } from "./StyledProfile";
import Card from "../../components/Card/Card";
import { getNewsByUserId } from "../../Services/NewsService";

function Profile() {
  const { user } = useContext(UserContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (user && user._id) {
      getNewsByUserId(user._id)
        .then((response) => {
          setNews(response.data);
        })
        .catch((error) => {
          console.error("Error fetching news:", error);
        });
    }
  }, [user]);

  return (
    <div>
      <StyledProfile>
        <CardProfile>
          <h2>{user.name}</h2>
          <h3>{user._id}</h3>
        </CardProfile>
        {news.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            text={item.text}
            image={item.image}
            likes={item.likes}
            comments={item.comments.length}
          />
        ))}
      </StyledProfile>
    </div>
  );
}

export default Profile;
