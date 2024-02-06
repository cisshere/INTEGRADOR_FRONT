import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ProductoCarrito = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 1px solid;
  padding: 0.3rem;
  align-items: center;
  margin: 0.2rem;
  background-color: #c9bbd1;
`;

export const ProdImgCarrito = styled.img`
  width: 30%;
  border: solid 1px;
`;

export const DatosProductCarrito = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 10rem;
`;

export const CambiarCantidad = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const ButtonCart = styled.button`
  background-color: #f7d2f5;
  padding: 0.3rem 0rem;
  letter-spacing: 1px;
  margin: 0 4rem;
  cursor: pointer;
  font-size: 0.813rem;
`;

export const ButtonCambiarCantidad = styled.button`
  display: flex;
  align-items: center;
`;

export const BelowCarrito = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LinkCarrito = styled(NavLink)`
  background-color: #f7d2f5;
  padding: 0.3rem 0rem;
  letter-spacing: 1px;
  margin: 0 4rem;
  cursor: pointer;
  border: 2px solid;
  font-size: 0.813rem;
  text-decoration: none;
`;
