import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Card";
import Pagina2 from "./Pagina2";
import NoEncontrado from "./NoEncontrado";

export function App() {
  return (
    <div>
      <div>layout principal que no cambia</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />}></Route>
          <Route path="probando" element={<Pagina2 />}></Route>
          <Route path="*" element={<NoEncontrado />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
