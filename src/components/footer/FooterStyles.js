import styled from "styled-components";

export const FooterContenedor = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  color: white;
  background-color: #d0acd3;
  gap: 3rem;
  padding: 2rem;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const BasesCondiciones = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
`;

export const Redes = styled(BasesCondiciones)``;

export const RedesSociales = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 1.5rem;
`;
