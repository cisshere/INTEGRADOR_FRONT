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
} from "./LoginStyled";
import * as Yup from "yup";
import {loginUsuario} from "../../datos/ClienteApi.js";
import {useNavigate} from "react-router-dom";
import {setToken} from "../../redux/auth/authActions.jsx";
import {useDispatch} from "react-redux";

const validationSchema = Yup.object({
  email: Yup.string().trim().required("Este campo es requerido"),
  contrasenia: Yup.string().trim().required("Este campo es requerido"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <LoginSection>
      <ContenedorLogin>
        <h2>Iniciar Sesión</h2>

        <Formik
          initialValues={{
            email: "",
            contrasenia: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const token = await loginUsuario(values.email, values.contrasenia);
              dispatch(setToken(token))
              resetForm();
              navigate("/");
            } catch (e) {
              console.log(e)
            }
          }}
        >
          {({ touched, errors }) => (
            <Formulario>
              <SecctionForm>
                <label>Email:</label>

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
                  type="password"
                  name="contrasenia"
                  $error={errors.contrasenia && touched.contrasenia}
                />
                <ErrorMessage name="contrasenia" component={ErrorStyled} />
              </SecctionForm>

              <Submit type="submit">Iniciar Sesión</Submit>
            </Formulario>
          )}
        </Formik>

        <a>¿Olvidaste tu contraseña?</a>

        <NavItem to="/signIn">¿No tienes cuenta? Registrate</NavItem>

        <NavHome to="/">Volver al home</NavHome>
      </ContenedorLogin>
    </LoginSection>
  );
};

export default Login;
