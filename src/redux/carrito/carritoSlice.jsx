import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsCarrito: [],
};

export const carritoSlice = createSlice({
  name: "carrito",
  initialState,

  reducers: {
    agregarProducto: (state, action) => {
      const productoAComprar = state.itemsCarrito.find(
        (producto) => producto._id === action.payload._id
      );
      if (productoAComprar) {
        productoAComprar.cantidad += 1;
      } else {
        state.itemsCarrito.push({ ...action.payload, cantidad: 1 });
      }
    },
    incrementar: (state, action) => {
      const productoAComprar = state.itemsCarrito.find(
        (producto) => producto._id === action.payload._id
      );
      if (productoAComprar.cantidad >= 1) {
        productoAComprar.cantidad += 1;
      }
    },
    decrementar: (state, action) => {
      const productoAComprar = state.itemsCarrito.find(
        (producto) => producto._id === action.payload._id
      );
      if (productoAComprar.cantidad > 1) {
        productoAComprar.cantidad -= 1;
      }
    },
    borrarProducto : (state,action) =>{
      const productoAComprar = state.itemsCarrito.findIndex(
        (producto) => producto._id === action.payload._id
      );
      
      state.itemsCarrito.splice(productoAComprar, 1);
    },
    borrarCarrito: (state) => {
      state.itemsCarrito = [];
    },
  },
});

export default carritoSlice.reducer;
