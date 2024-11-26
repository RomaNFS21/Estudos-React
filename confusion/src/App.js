import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";

function App() {
  // Estado para armazenar os pratos
  const [dishes] = useState(DISHES);

  return (
    <div>
      {/* Navbar do aplicativo */}
      <Navbar dark color="primary" expand="md">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          <div>Aluno: Victor Barros Roma</div>
        </div>
      </Navbar>

      {/* Componente Menu com a lista de pratos */}
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
