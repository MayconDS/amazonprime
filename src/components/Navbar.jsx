import React from "react";
import "./Navbar.css";
import { SiPrimevideo } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { AiOutlineGlobal, AiOutlineUser } from "react-icons/ai";

export default () => {
  return (
    <header>
      <div className="container">
        <div className="header-left">
          <div className="logo">
            <a href="/">
              <SiPrimevideo />
            </a>
          </div>
          <div className="header-loja">
            <a href="/">Loja</a>
          </div>
          <div className="header-canais">
            <a href="/">Canais</a>
          </div>
          <div className="header-categorias">
            <a href="/">Categorias</a>
          </div>
          <div className="header-minhas-areas">
            <a href="/">Minhas área</a>
          </div>
        </div>
        <div className="header-right">
          <button>Experimente grátis</button>
          <a href="/">
            <FiSearch />
          </a>
          <a href="/">
            <AiOutlineGlobal />
          </a>
          <a href="/">
            <AiOutlineUser />
          </a>
        </div>
      </div>
    </header>
  );
};
