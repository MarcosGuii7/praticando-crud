import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <NavLink to="/" end className="link">Home</NavLink>
          <NavLink to="/produto" className="link">Cadastro de Produtos</NavLink>
          <NavLink to="/usuario" className="link">Cadastro de Usuários</NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Rotas no React
      </footer>
    </div>
  );
}