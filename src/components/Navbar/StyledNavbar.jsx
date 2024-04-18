import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 1rem;
  height: 3rem;
  /* position: fixed;
  top: 0; */
  background-color: whitesmoke;
  z-index: 1;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

const Image = styled.img`
  width: 90px;
  margin-top: 0.5rem; /* Diminui a margem superior */
  padding: 1rem 0.5rem; /* Diminui o padding */
  object-fit: cover;
  cursor: pointer;
`;

const ButtonLogo = styled.button`
  cursor: pointer;
  border: none;
  background-color: #f5f5f5;
  color: #757575;
  width: 10%;
  height: 100%;
`;

const Form = styled.form``;

const Input = styled.div`
  position: relative;
  width: 200px;
  height: 2.3rem;
  display: flex;
  border-radius: 5rem;
  box-shadow: 0px 2px 5px #757575;

  button {
    cursor: pointer;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    padding-right: 0.7rem;
    font-size: 1rem;
    border-radius: 0 1rem 1rem 0;
  }

  input {
    outline: none;
    font-size: 1rem;
    padding: 1rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 1rem 0 0 1rem;
  }
  :focus {
    border: 1px solid #0bade3;
  }

  i {
    top: 2px;
    right: 0.2rem;
    z-index: 10;
    border: none;
    border-radius: 3rem;
    background-color: #f5f5f5;
    color: #757575;
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem; // Adiciona espaçamento entre os elementos
  margin-right: 1rem;
`;

export { Nav, Image, Input, ButtonLogo, Form, Perfil };
