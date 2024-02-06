import styled from "styled-components";
import { Form } from "formik";
import { NavLink } from "react-router-dom";

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
`;

export const ContenedorLogin = styled.div`
  font-weight: bold;
  font-size: 17px;
  background-image: url(./assets/img/joyas/login.jpg);
  background-size: cover;
  background-position: center;
  padding: 2rem 5rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  @media (max-width: 475px) {
    padding: 1rem 0;
    width: 100%;
  }
`;

export const Formulario = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SecctionForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const InputStyle = styled.input`
  text-align: center;
  font-size: 1.125rem;
  color: black;
  padding: 0.25rem 2.3rem;
  border: none;
  border: 0.2rem solid ${(props) => (props.$error ? "red" : "#afafaf")};

  @media (max-width: 510px) {
    font-size: 1rem;
  }
`;

export const Submit = styled.button`
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  padding: 0.4rem 1rem;
`;

export const ErrorStyled = styled.span`
  color: red;
`;

export const NavItem = styled(NavLink)`
  &:hover {
    text-decoration: underline;
  }
`;

export const NavHome = styled(NavItem)`
padding: 0.5rem;
    background-color: #cd89c2;
    margin: 0 4rem;
    border-radius: 15px;
`