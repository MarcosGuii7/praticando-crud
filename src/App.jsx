import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Route>
    </Routes>
  );
}
