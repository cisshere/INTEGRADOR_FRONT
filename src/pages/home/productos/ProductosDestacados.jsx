import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import CardProducto from "../../products/CardContainer";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {listarProductosDestacados} from "../../../datos/ClienteApi.js";

const VerMasProductos = styled(NavLink)`
  background-color: #f7d2f5;
  padding: 0.6rem;
  letter-spacing: 1px;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.5s;
  border: 2px solid;

  &:hover {
    padding: 0.8rem;
  }
`;

const ProductListSeccion = () => {

  const configuracion = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [productos, setProductos] = useState([]);


  useEffect(()=>{
    listarProductosDestacados().then((response)=> {
      setProductos(response);
    })
  },[setProductos]);


  return (
    <section className="contenedorCarousel">
      <h1 style={{ textAlign: "center" }}>Productos Destacados</h1>
      <Slider {...configuracion}>
        {productos.map((producto) => (
          <CardProducto {...producto} key={producto._id} />
        ))}
      </Slider>
      <div style={{ textAlign: "center", marginTop: "4.5rem", height: "2rem" }}>
        <VerMasProductos to="productos">Ver + productos</VerMasProductos>
      </div>
    </section>
  );
};

export default ProductListSeccion;
