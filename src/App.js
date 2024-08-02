import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Busqueda from "./components/Busqueda.jsx";
import Selecciones from "./components/Selecciones.jsx";
import Carousel from "./components/Carrusel.jsx";
import PiePagina from "./components/Pie_Pagina.jsx";
import Video from "./components/Video.jsx";
import Destinos from "./components/Destinos.jsx";

function App() {
  return (
    <div >
      <Navbar />
      <Video/>
      <Destinos/>
      <Busqueda/>
      <Selecciones/>
      <Carousel/>
      <PiePagina/>
    </div>
  );
}

export default App;
