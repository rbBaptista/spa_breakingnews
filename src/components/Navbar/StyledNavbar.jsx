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
  left: 50%; /* Centraliza horizontalmente */
`;

const Input = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  border-radius: 0;

  button {
    cursor: pointer;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    padding: 0.5rem;
    font-size: 1rem;
  }

  input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 1rem 0 0 1rem;
  }
  :focus {
    border: 1px solid #0bade3;
  }

  i {
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    border-radius: 0rem;
    background-color: #f5f5f5;
    color: #757575;
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

export { Nav, Image, Input };
