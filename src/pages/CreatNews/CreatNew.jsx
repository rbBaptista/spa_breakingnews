import { StyledCreatNews } from "./StyledCreatNews.jsx";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { createNews } from "../../Services/NewsService.js";
import { Input } from "../../components/Input/Input.jsx";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(2),
  text: z.string(),
  image: z.string(),
});

function CreatNew() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await createNews(data);
      console.log("News created:", response.data);
      // Cookies.set("token", response.data.token, { expires: 7 });
      navigate("/profile");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <StyledCreatNews>
      <h1>Create News</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("title")} type="text" placeholder="Titulo" />
        {errors.title && <p>{errors.title.message}</p>}

        <Input {...register("text")} type="text" placeholder="Texto" />
        {errors.text && <p>{errors.text.message}</p>}

        <Input {...register("image")} type="text" placeholder="Imagem" />
        {errors.image && <p>{errors.image.message}</p>}

        <Input type="submit" value="Create News" />
      </form>
    </StyledCreatNews>
  );
}

export default CreatNew;
