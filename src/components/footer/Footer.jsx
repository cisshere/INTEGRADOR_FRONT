import React from "react";
import {
  FooterContenedor,
  BasesCondiciones,
  Redes,
  RedesSociales,
} from "./FooterStyles";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const FooterSeccion = () => {
  return (
    <FooterContenedor>
      <BasesCondiciones>
        <h4>Atención al Cliente</h4>
        <a href="#">Centro de ayuda</a>
        <a href="#">Términos y Condiciones</a>
        <a href="#">Legales de Promociones</a>
      </BasesCondiciones>

      <Redes>
        <h4>¡Seguinos en nuestras redes!</h4>
        <RedesSociales>
          <GrFacebook />
          <BsInstagram />
          <FaTwitter />
        </RedesSociales>
      </Redes>

      <BasesCondiciones>
        <h4>¿Necesitas Ayuda? 📞</h4>
        <p>
          0800-666-6666 | <a href="#">Contacto</a>
        </p>
      </BasesCondiciones>
    </FooterContenedor>
  );
};

export default FooterSeccion;
