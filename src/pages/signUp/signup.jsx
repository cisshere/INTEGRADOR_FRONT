import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import {
  LoginSection,
  ContenedorLogin,
  Formulario,
  SecctionForm,
  InputStyle,
  Submit,
  ErrorStyled,
  NavItem,
  NavHome,
} from "../login/LoginStyled";
import * as Yup from "yup";
import { registrarUsuario } from "../../datos/ClienteApi.js";
import { setToken } from "../../redux/auth/authActions.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const validationSchema = Yup.object({
  nombre: Yup.string().trim().required("Este campo es requerido"),
  apellido: Yup.string().trim().required("Este campo es requerido"),
  email: Yup.string()
    .email("Correo electronico invalido")
    .required("Este campo es requerido"),
  contrasenia: Yup.string()
    .required("Contraseña es requerida")
    .min(8, "minimo 8 caracteres")
    .max(20, "maximo 20 caracteres"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <LoginSection>
      <ContenedorLogin>
        <h2>Crear cuenta</h2>

        <Formik
          initialValues={{
            nombre: "",
            apellido: "",
            email: "",
            contrasenia: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const token = await registrarUsuario(
                values.email,
                values.contrasenia,
                values.nombre,
                values.apellido
              );
              dispatch(setToken(token));
              resetForm();
              navigate("/");
              Toastify({
                text: "Se ha registrado exitosamente.",
                className: "info",
                duration: 1500,
                gravity: "bottom",
                position: "right",
                close: true,
                style: {
                  background: "#4CD35A",
                },
              }).showToast();
            } catch (e) {
              console.log(e);
            }
            resetForm();
          }}
        >
          {({ touched, errors }) => (
            <Formulario>
              <SecctionForm>
                <label>Nombre:</label>

                <Field
                  as={InputStyle}
                  type="text"
                  name="nombre"
                  $error={errors.nombre && touched.nombre}
                />
                <ErrorMessage name="nombre" component={ErrorStyled} />
              </SecctionForm>

              <SecctionForm>
                <label>Apellido:</label>

                <Field
                  as={InputStyle}
                  type="text"
                  name="apellido"
                  $error={errors.apellido && touched.apellido}
                />
                <ErrorMessage name="apellido" component={ErrorStyled} />
              </SecctionForm>

              <SecctionForm>
                <label>email:</label>

                <Field
                  as={InputStyle}
                  type="text"
                  name="email"
                  $error={errors.email && touched.email}
                />
                <ErrorMessage name="email" component={ErrorStyled} />
              </SecctionForm>

              <SecctionForm>
                <label>Contraseña:</label>
                <Field
                  as={InputStyle}
                  type="text"
                  name="contrasenia"
                  $error={errors.contrasenia && touched.contrasenia}
                />
                <ErrorMessage name="contrasenia" component={ErrorStyled} />
              </SecctionForm>

              <Submit type="submit">Registrame</Submit>
            </Formulario>
          )}
        </Formik>

        <NavItem to="/login">¿Ya tienes una cuenta?</NavItem>

        <NavHome to="/">Volver al home</NavHome>
      </ContenedorLogin>
    </LoginSection>
  );
};

export default Signup;
