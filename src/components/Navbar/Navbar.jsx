import logo from "../../images/logo.png";
import { Nav, Image, Input, Form, Perfil } from "./StyledNavbar";
import { Button } from "../Buttun/Button";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { getByUserId } from "../../Services/UserService";
import { useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";

const SearchSchema = z.object({
  title: z
    .string()
    .min(1, { message: "O campo de pesquisa não pode ser vazio" })
    .refine((value) => value.trim() !== "", { message: "O campo de pesquisa não pode conter apenas espaços" }),
});

function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(SearchSchema) });
  const navigate = useNavigate();

  function onSearch(data) {
    const title = data.title;
    navigate(`/search/${title}`);
    console.log(title);
    reset();
  }

  function onLogout() {
    console.log("Logout");
    Cookies.remove("token");
    navigate("/");
  }

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      if (Cookies.get("token")) {
        try {
          const response = await getByUserId();
          setUser(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchUser();
  }, [setUser]);

  return (
    <>
      <Nav>
        <Form onSubmit={handleSubmit(onSearch)}>
          <Input className="input-search-space">
            <input {...register("title")} type="text" placeholder="Pesquisar" />
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
          </Input>
        </Form>
        <Link as={Link} to="/">
          <Image src={logo} alt="logo breaking news" />
        </Link>
        {Cookies.get("token") ? (
          <Perfil>
            <Link to="/profile">
              <p>{user.name}</p>
            </Link>
            <Button type="button" text="Logout" onClick={onLogout} />
          </Perfil>
        ) : (
          <Link to="/auth">
            <Button type="button" text="Entrar" />
          </Link>
        )}
      </Nav>
      {errors.title && <span>{errors.title.message}</span>}
      <Outlet />
    </>
  );
}

export default Navbar;
