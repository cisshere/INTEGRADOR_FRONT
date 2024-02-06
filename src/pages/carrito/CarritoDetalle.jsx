import React from "react";
import { selectItemsCarrito } from "../../redux/carrito/carritoSelectors";
import CarritoDetalleProducto from "./CarritoDetalleProducto"
import { CarritoSeccion } from "./CarritoDetalleStyle";


const CarritoDetalle = () => {
  const itemsCarrito = selectItemsCarrito();
  return (
    <>
      <CarritoSeccion>
        {itemsCarrito.map((producto) => (
          <CarritoDetalleProducto {...producto} key={producto.id} />
        ))}
      </CarritoSeccion>
    </>
  );
};

export default CarritoDetalle;
