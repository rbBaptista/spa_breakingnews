import logo from "../../images/logo.png";
import { Nav, Image, Input, Form } from "./StyledNavbar";
import { Button } from "../Buttun/Button";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
        <Link to="/auth">
          <Button type="button" text="Entrar" />
        </Link>
      </Nav>
      {errors.title && <span>{errors.title.message}</span>}
      <Outlet />
    </>
  );
}

export default Navbar;
