import { UserContext } from "../../context/UserContext";
import { useContext, useState, useEffect } from "react";
import { StyledProfile, CardProfile } from "./StyledProfile";
import Card from "../../components/Card/Card";
import { getNewsByUserId } from "../../Services/NewsService";
import { deleteNews } from "../../Services/NewsService";
import { Link } from "react-router-dom";

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
          <div>
            <h2>{user.name}</h2>
            <h3>{user._id}</h3>
          </div>
          <div>
            <img src={user.image} alt="Profile" />
          </div>
          <div>
            <Link to="/news">
              <i className="bi bi-plus-circle"></i>
            </Link>
          </div>
        </CardProfile>
        {news.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            text={item.text}
            image={item.image}
            likes={item.likes}
            comments={item.comments.length}
            edit={true}
            deleteNews={() => {
              deleteNews(item._id)
                .then(() => {
                  setNews(news.filter((news) => news._id !== item._id));
                  console.log("News deleted");
                })
                .catch((error) => {
                  console.error("Error deleting news:", error);
                });
            }}
          />
        ))}
      </StyledProfile>
    </div>
  );
}

export default Profile;
