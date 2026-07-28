import FondoPagina from "./components/FondoPagina";
import Navbar from "./components/Navbar";
import Presentacion from "./components/Presentacion";
import AcercaDeMi from "./components/AcercaDeMi";
import Tecnologias from "./components/Tecnologias";

export default function Home() {
  return (
    <FondoPagina>
      <Navbar />
      <main>
        <Presentacion />
        <AcercaDeMi />
        <Tecnologias />
      </main>
    </FondoPagina>
  );
}