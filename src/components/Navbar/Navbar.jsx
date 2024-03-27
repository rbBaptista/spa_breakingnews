import logo from "../../images/logo.png";
import { Nav, Image, Input } from "./StyledNavbar";
import { Button } from "../Buttun/Button";

function Navbar() {
  return (
    <>
      <Nav>
        <Input className="input-search-space">
          <input type="text" placeholder="Pesquisar" />
          <button type="button">
            <i className="bi bi-search"></i>
          </button>
        </Input>

        <Image src={logo} alt="logo breaking news" />

        <Button type="button" text="Entrar" />
      </Nav>
    </>
  );
}

export default Navbar;
