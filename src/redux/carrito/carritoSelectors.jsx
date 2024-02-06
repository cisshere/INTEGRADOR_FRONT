import { useSelector } from "react-redux";

export const selectItemsCarrito = ()=> useSelector(state => state.carrito.itemsCarrito);
