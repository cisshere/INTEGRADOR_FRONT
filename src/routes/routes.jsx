import React from "react";
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Contacto from "../pages/contacto/Contacto";
import ProductosSecction from "../pages/products/Productos";
import Beneficios from "../pages/beneficios/Beneficios";
import { CarritoPage } from "../pages/carrito/CarritoPage";
import Login from "../pages/login/Login";
import Signup from "../pages/signUp/signup.jsx";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="productos" element={<ProductosSecction />} />
          <Route path="beneficios" element={<Beneficios />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="checkout" element={<CarritoPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signIn" element={<Signup/> } />

          <Route path="*" element={<h2>Error!</h2>} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
