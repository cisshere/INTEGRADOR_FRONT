import React from "react";
import { useDispatch } from "react-redux";
import { agregarProducto } from "../../redux/carrito/carritoActions";
import {
  ProductoContenedor,
  BtnComprarProducto,
  ImagenProducto,
  DescripcionProducto,
  DescripcionProductoNombre,
} from "../products/ProductosStyles";
import Modal from "react-modal";
import { SlClose } from "react-icons/sl";
import { ButtonModal } from "../../components/navbar/modal/ModalStyled";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid",
    background: "rgb(207 169 169)",
  },
};

const CardProducto = (producto) => {
  const dispatch = useDispatch();
  const { img, alt, nombre, precio, metal } = producto;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
    <ProductoContenedor>
      <ImagenProducto src={img} alt={alt} />
      <DescripcionProductoNombre>{nombre}</DescripcionProductoNombre>
      <DescripcionProducto> $ {precio} </DescripcionProducto>
      <DescripcionProducto> {metal} </DescripcionProducto>
      <BtnComprarProducto onClick={openModal}>
        Comprar
      </BtnComprarProducto>
    </ProductoContenedor>

    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <SlClose onClick={closeModal} size={28} style={{ cursor: "pointer" }} />
      <h2>¿Desea agregar el producto al carrito?</h2>
      <div style={{ display: "flex", gap: "2rem" }}>
        <ButtonModal onClick={() => {dispatch(agregarProducto(producto)); closeModal();  
      Toastify({
        text: "Se agrego un producto al carrito",
        className: "info",
        duration: 1500,
        gravity: "bottom",
        position: "right",
        close: true,
        style: {
          background: "#4CD35A",
        },
      }).showToast();
      }
      }>Aceptar</ButtonModal>
        <ButtonModal onClick={closeModal}>Cancelar</ButtonModal>
      </div>
    </Modal>
    </>
  );
};

export default CardProducto;
