import styled from "styled-components";

export const CarritoSeccion = styled.section`
  padding-top: 6rem;
`;

export const CarritoProductoDetalle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  @media(max-width: 530px){
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CambiarCantidades = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  border: 1px solid;
    padding: 0.3rem;
`;

export const ButtonCantidad = styled.button`
  display: flex;
  align-items: center;
`;

export const NombreProducto = styled.p`
  font-weight: bold;
  min-width: 10rem;

  @media(max-width: 530px){
    min-width: auto;
  }
`;

export const Contenedor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media(max-width: 530px){
    flex-direction: column;
  }
`;

export const ImgProducto = styled.img`
width: 5rem;

@media(max-width: 530px){
  width: 10rem;
  }
`