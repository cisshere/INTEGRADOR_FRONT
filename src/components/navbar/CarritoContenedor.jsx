import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  decrementar,
  incrementar,
  borrarProducto,
} from "../../redux/carrito/carritoActions";
import { CambiarCantidad, DatosProductCarrito, ProdImgCarrito, ProductoCarrito, ButtonCambiarCantidad } from "./CarritoStyles";

 const CarritoContainer = (producto) => {

  const dispatchRedux = useDispatch();
  const { img, nombre, precio, cantidad } = producto;

  return (
    <ProductoCarrito>
      <ProdImgCarrito src={img} />
      <DatosProductCarrito>
        <p style={{ fontWeight: "bold" }}>{nombre} </p>
        <p> ${precio.toLocaleString("es")}</p>
        <CambiarCantidad>
          <ButtonCambiarCantidad>
            <GrFormSubtract onClick={() => dispatchRedux(decrementar(producto))} />
          </ButtonCambiarCantidad>
          <p>{cantidad}</p>
          <ButtonCambiarCantidad>
            <GrFormAdd onClick={() => dispatchRedux(incrementar(producto))} />
          </ButtonCambiarCantidad>
        </CambiarCantidad>
      </DatosProductCarrito>
      <div>
        <button>
          <FaRegTrashAlt
            onClick={() => dispatchRedux(borrarProducto(producto))}
          />
        </button>
      </div>
    </ProductoCarrito>
  );
};

export default CarritoContainer;
