import React from "react";
import {
  HeroSection,
  ContenedorHero,
  ImagenHero,
  ContenedorDescripcion,
  Descripcion,
} from "./HeroStyles";
import { FiPackage } from "react-icons/fi";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";

const Hero = () => {
  return (
    <HeroSection>
      <ContenedorHero>
        <ImagenHero src="./assets/img/joyas/anillos-portada.png" />

        <ContenedorDescripcion>
          <Descripcion>
            <FiPackage />
            <p style={{padding:"1rem 0.2rem"}}>Envios a todo el pais!</p>
          </Descripcion>

          <Descripcion>
            <BsFillCreditCard2BackFill />
            <p style={{padding:"1rem 0.2rem"}}>Aceptamos todas las tarjetas</p>
          </Descripcion>

          <Descripcion>
            <MdOutlineSecurityUpdateGood />
            <p style={{padding:"1rem 0.2rem"}}>Tu compra 100% asegurada</p>
          </Descripcion>
        </ContenedorDescripcion>
      </ContenedorHero>
    </HeroSection>
  );
};

export default Hero;
