import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainerStyled = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
`;

export const NavbarContainerStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #dcd0e3;
  padding: 0.3rem 1rem;

  @media (min-width: 1368px) {
    justify-content: center;
    gap: 8rem;
  }
`;

export const MenuStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavListPrincipal = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 0;

  @media (max-width: 940px) {
    display: none;

    &.openMenu {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 79%;
      left: 0px;
      background-color: #dcd0e3;
      width: 13rem;
      z-index: 1;
      align-items: center;
      gap: 3rem;
      padding: 1rem;
    }
  }
`;

export const NavItem = styled(NavLink)`
  font-size: 1.3rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const LogoMarca = styled.img`
  height: 4.3rem;
  width: 10rem;
  margin-right: 15rem;

  @media (min-width: 1368px) {
    margin: 0;
  }

  @media (max-width: 940px) {
    margin: 0;
  }
`;

export const BtnNavbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LinkLogin = styled(NavLink)`
  display: flex;
  font-size: 2.2rem;
`;

export const ButtonCartLogo = styled.button`
  display: flex;
  font-size: 1.7rem;
  background-color: #b78dcd1c;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ButtonMenu = styled(ButtonCartLogo)`
  border-radius: 0;

  @media (min-width: 941px) {
    display: none;
  }
`;

export const Carrito = styled.div`
  display: none;

  &.openCart {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    background-color: #c9bbd1;
    width: 18rem;
    top: 4.9rem;
    right: 0%;
    padding: 1rem 0.4rem;
    gap: 1rem;
    border: 0.06rem solid black;
    height: 30rem;

    @media (min-width: 1368px) {
      right: auto;
    }
  }
`;

export const ContenedorCarrito = styled.div`
  gap: 0.3rem;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  max-height: 20rem;
  height: 20rem;
`;
