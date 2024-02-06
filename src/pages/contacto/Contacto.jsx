import React from "react";
import { Formik, Field, ErrorMessage } from "formik";

import {
  ContactSection,
  ContenedorContact,
  Formulario,
  SecctionForm,
  TextAreaStyle,
  InputStyle,
  Submit,
  ErrorStyled,
} from "./ContactoStyled";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Este campo es requerido"),
  lastName: Yup.string().trim().required("Este campo es requerido"),
  email: Yup.string()
    .email("Correo electronico invalido")
    .required("Este campo es requerido"),
  asunto: Yup.string().max(255, "Máximo de 255 caracteres").notRequired(),
});

const Contacto = () => {
  return (
    <ContactSection>
      <ContenedorContact>
        <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Contacto</h2>

        <Formik
          initialValues={{
            name: "",
            lastName: "",
            email: "",
            asunto: "",
            as: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
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
                  name="name"
                  $error={errors.name && touched.name}
                />
                <ErrorMessage name="name" component={ErrorStyled} />
              </SecctionForm>

              <SecctionForm>
                <label>Apellido:</label>
                <Field
                  as={InputStyle}
                  type="text"
                  name="lastName"
                  $error={errors.lastName && touched.lastName}
                />
                <ErrorMessage name="lastName" component={ErrorStyled} />
              </SecctionForm>

              <SecctionForm>
                <label>Email:</label>
                <Field
                  as={InputStyle}
                  type="email"
                  name="email"
                  $error={errors.email && touched.email}
                />
                <ErrorMessage name="email" component={ErrorStyled} />
              </SecctionForm>

              <SecctionForm>
                <label>Asunto:</label>
                <Field as={TextAreaStyle} cols="30" rows="5" name="asunto" />
                <ErrorMessage name="asunto" component={ErrorStyled} />
              </SecctionForm>

              <Submit type="submit">Enviar</Submit>
            </Formulario>
          )}
        </Formik>
      </ContenedorContact>
    </ContactSection>
  );
};

export default Contacto;
