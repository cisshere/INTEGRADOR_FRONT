import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding-top: 6rem;

  @media(max-width: 420px){
    padding-top: 4.5rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }

  @media (min-width: 1368px) {
    margin: 0 15%;
  }
`;

export const ContenedorHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: #d1bad0;
  border-radius: 2rem;
  padding: 2rem;

  @media(max-width:420px){
    padding: 2rem 0;
    border-radius: 0;
  }

  @media(max-width:710px){
    flex-direction: column;
  }
`;

export const ImagenHero = styled.img`
  width: 20rem;
  border-radius: 1rem;
  
  @media(max-width:420px){
    width:90%;
  }
`;

export const ContenedorDescripcion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Descripcion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: aliceblue;
  border-radius: 1rem;
  width: 17rem;

  &:hover {
    transition-duration: 500ms;
    background-color: #f3cded;
    }
`;
