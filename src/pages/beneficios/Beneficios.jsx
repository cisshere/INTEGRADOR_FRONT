import React from "react";

import { BeneficiosSection, BeneficiosContenedor } from "./BeneficiosStyled";

const Beneficios = () => {
  return (
    <>
      <BeneficiosSection>
        <BeneficiosContenedor>
          <h2>¿Quienes somos?</h2>
          <p>
            Somos un emprendimiento de joyeria, nos destacamos por traer moda
            para todos! con un sitio web abierto las 24 horas, con envíos a todo
            el país, dónde vas a encontrar la colección exclusiva.
          </p>
          <h2>¿SOMOS MAYORISTAS?</h2>
          <p>No, unicamente por menor!</p>

          <h2>¿CUAL ES EL MINIMO DE COMPRA?</h2>
          <p>No hay minimo de compra.</p>

          <h2>¿HAY STOCK DE TODOS LOS PRODUCTOS?</h2>
          <p>Si, todos los productos publicados se encuentran en stock.</p>
        </BeneficiosContenedor>
      </BeneficiosSection>
    </>
  );
};

export default Beneficios;
