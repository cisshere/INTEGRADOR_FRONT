import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import { MenuDespegable } from "../navbar/MenuContext";
import FooterSeccion from "../footer/Footer";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const ContainerStyle = styled.div``;

const Layout = ({ children }) => {

  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <MenuDespegable>
        <Navbar />
      </MenuDespegable>
      <ContainerStyle>{children}</ContainerStyle>
      <FooterSeccion />
    </>
  );
};

export default Layout;
