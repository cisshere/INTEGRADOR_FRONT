import React, { useState } from "react";
import { useContext } from "react";
import {
  HeaderContainerStyled,
  NavbarContainerStyled,
  MenuStyled,
  NavListPrincipal,
  BtnNavbar,
  LinkLogin,
  ButtonCartLogo,
  ButtonMenu,
  LogoMarca,
  NavItem,
  Carrito,
  ContenedorCarrito,
} from "./NavbarStyles";
import { ButtonCart, BelowCarrito, LinkCarrito } from "./CarritoStyles";
import {BiSolidUserRectangle} from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { Context } from "./MenuContext";
import { selectItemsCarrito } from "../../redux/carrito/carritoSelectors";
import { BsCart4 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { borrarCarrito } from "../../redux/carrito/carritoActions";
import CarritoContainer from "./CarritoContenedor";
import { ModalCarrito } from "./modal/ModalReact";
import {estaLogueado, getToken} from "../../redux/auth/authSelectors.jsx";
import {PiSignOutBold} from "react-icons/pi";
import {setToken} from "../../redux/auth/authActions.jsx";
import {useNavigate} from "react-router-dom";
import {guardarCompra} from "../../datos/ClienteApi.js";

const Navbar = () => {
  const { state, dispatch } = useContext(Context);
  const itemsCarrito = selectItemsCarrito();
  const mostrarLogin = !estaLogueado();
  const dispatchRedux = useDispatch();
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [carritoComprado, setCarritoComprado] = useState(false);
  const token = getToken();

  const comprarCarrito = () =>{
    if(mostrarLogin){
        alert("Necesita loguearse para poder comprar");
        navigate("/login");
    }else{
      setCarritoComprado(true);
      openModal();
    }
  }

  const borrarTodoCarrito = () =>{
    setCarritoComprado(false);
    openModal();

  }

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const totalDeCompra = itemsCarrito.reduce((acc, producto) => {
    return (acc += producto.precio * producto.cantidad)
  }, 0);

  return (
    <>
      <HeaderContainerStyled>
        <NavbarContainerStyled>
          <MenuStyled>
            <ButtonMenu onClick={() => dispatch({ type: "toggle_menu" })}>
              <SlMenu />
            </ButtonMenu>
            <NavListPrincipal className={state.isMenuOpen ? "openMenu" : ""}>
              <NavItem to="/"> Home </NavItem>
              <NavItem to="productos"> Productos </NavItem>
              <NavItem to="beneficios"> Beneficios </NavItem>
              <NavItem to="contacto"> Contacto </NavItem>
            </NavListPrincipal>
          </MenuStyled>

          <NavItem to="/"> <LogoMarca src="./assets/img/logo.png" alt="logo" /></NavItem>

          <BtnNavbar>
            {mostrarLogin ?
                <LinkLogin to="/login">
                    <BiSolidUserRectangle/>
                </LinkLogin> :
                <LinkLogin onClick={()=> dispatchRedux(setToken(undefined))}>
                  <PiSignOutBold/>
                </LinkLogin>
            }
            <ButtonCartLogo onClick={() => dispatch({ type: "toggle_cart" })}>
              <FaShoppingCart />
            </ButtonCartLogo>

            <Carrito className={state.isCartOpen ? "openCart" : ""}>
              <p>
                <BsCart4 />
                Mi carrito
              </p>
              {itemsCarrito.length === 0 && (
                <p>No hay productos en el carrito</p>
              )}
              <ContenedorCarrito>
                {itemsCarrito.map((producto) => (
                  <CarritoContainer {...producto} key={producto._id} />
                ))}
              </ContenedorCarrito>

              {itemsCarrito.length !== 0 && (
                <BelowCarrito>
                  <p style={{ border: "1px solid", margin: "0 4rem" }}>
                    Total $<span>{totalDeCompra.toLocaleString("es")}</span>
                  </p>
                  <ButtonCart onClick={comprarCarrito} >Comprar</ButtonCart>
                  <ButtonCart onClick={borrarTodoCarrito}>Borrar todo</ButtonCart>
                  <LinkCarrito to="checkout" >Ir al carrito </LinkCarrito>
                </BelowCarrito>
              )}
            </Carrito>
          </BtnNavbar>
        </NavbarContainerStyled>
      </HeaderContainerStyled>

      <ModalCarrito
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          aceptarClick={
            carritoComprado ?
                () =>{
                  guardarCompra(itemsCarrito, token).then(()=>{
                    dispatchRedux(borrarCarrito());
                  })
                } :
                () =>{dispatchRedux(borrarCarrito())} }
          mensaje={carritoComprado ? "¿Desea realizar la compra?" : "¿Desea borrar todo el carrito?"} />
    </>
  );
};

export default Navbar;
