import { useSelector } from "react-redux";

export const estaLogueado = ()=> !!useSelector(state => state.auth.token);

export const getToken = ()=> useSelector(state => state.auth.token);
