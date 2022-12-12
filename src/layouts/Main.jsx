import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/NavBar";

export default function Main(props) {
  return (
    <>
      <NavBar />
      <div className="Main">{props.children}</div>
      <Footer />
    </>
  );
}
