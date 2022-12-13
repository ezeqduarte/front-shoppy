import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/NavBar";
import { useHref } from "react-router-dom";

export default function Main(props) {
  const href = useHref();

  return href === "/" || href === "/ingresar" ? null : (
    <>
      <NavBar />
      <div className="Main">{props.children}</div>
      <Footer />
    </>
  );
}
