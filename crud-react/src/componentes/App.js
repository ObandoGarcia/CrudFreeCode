import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import { useState } from "react";
import Celulares from  "./Celulares";
import CreateCelular from "./CreateCelular";
import UpdateCelular from "./UpdateCelular";
import Juegos from "./Juegos";
import Menu from "./Menu";
import Inicio from "./Home";

export default function App() {

  const[apiCelulares] = useState("https://denny2023.azurewebsites.net/api/celulares");
  const[apiJuegos] = useState("https://denny2023.azurewebsites.net/api/juegos");

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/celulares" element={<Celulares api={apiCelulares} />} />
        <Route path="/celulares/CreateCelular" element={<CreateCelular api={apiCelulares} />} />
        <Route path="/celulares/UpdateCelular" element={<UpdateCelular api={apiCelulares} />} />
        <Route path="/juegos" element={<Juegos api={apiJuegos} />} />    
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
