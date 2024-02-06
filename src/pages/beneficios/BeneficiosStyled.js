import styled from "styled-components";

export const BeneficiosSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
`;

export const BeneficiosContenedor = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-image: url(./assets/img/joyas/fondo-beneficios.png);
  background-size: cover;
  background-position: center;
  font-weight: bold;
  padding: 1rem;
  gap: 1rem;
  margin: 2rem 15%;
  max-width: 1000px;

  @media (max-width: 600px) {
    margin: 2rem 1rem;
  }
`;
