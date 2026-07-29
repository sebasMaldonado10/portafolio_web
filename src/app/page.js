import FondoPagina from "./components/FondoPagina";
import Navbar from "./components/Navbar";
import Presentacion from "./components/Presentacion";
import AcercaDeMi from "./components/AcercaDeMi";
import Tecnologias from "./components/Tecnologias";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <FondoPagina>
      <div id="inicio" />
      
      <Navbar />
      <main>
        <Presentacion />
        <AcercaDeMi />
        <Tecnologias />
        <Proyectos />
        <Contacto />
        <Footer />
      </main>
    </FondoPagina>
  );
}