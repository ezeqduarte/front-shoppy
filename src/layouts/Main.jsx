import React from "react";
import BackToTopButton from "../components/BackToTopButton";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Main(props) {
  return (
    <>
      <NavBar />
      <div className="Main">{props.children}</div>
      <BackToTopButton />
      <Footer />
    </>
  );
}
