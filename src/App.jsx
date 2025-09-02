import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import Usuario from "./Pages/Usuario"
import Produto from "./Pages/Produto";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="produto" element={<Produto />} />
        <Route path="usuario" element={<Usuario />} />
      </Route>
    </Routes>
  );
}