import styled from "styled-components";
import { Form } from "formik";

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 6rem;

  @media (min-width: 1368px) {
    margin: 0 15%;
  }
`;

export const ContenedorContact = styled.div`
  background-image: url(./assets/img/joyas/fondo.jpg);
  background-size: cover;
  background-position: center;
  padding: 2rem 5rem;
  margin-bottom: 1rem;

  @media (max-width: 475px) {
    padding: 2rem 0.3rem;
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

export const TextAreaStyle = styled.textarea`
  resize: none;
  font-size: 1.125rem;

  @media (max-width: 510px) {
    font-size: 1rem;
  }
`;

export const InputStyle = styled.input`
  text-align: center;
  font-size: 1.125rem;
  color: black;
  padding: 0.25rem 2.3rem;
  border: none;
  border: 0.2rem solid ${(props) => (props.$error ? "red" : "#dcd0e3")};

  @media (max-width: 510px) {
    font-size: 1rem;
  }
`;

export const Submit = styled.button`
  background-color: #dcd0e3;
  cursor: pointer;
  padding: 0.4rem 1rem;
`;

export const ErrorStyled = styled.span`
  color: red;
`;
