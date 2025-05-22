import { Link, Outlet } from "react-router";
import rotas from "../routes/rotas";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Toaster position="top-right" />
      <nav style={{ marginBottom: "20px" }}>
        <Link to={rotas.home}>Home</Link> |{" "}
        <Link to={rotas.produtos}>Produtos</Link> |{" "}
        <Link to={rotas.carrinho}>Carrinho</Link> |{" "}
        <Link to={rotas.login}>Login</Link>
      </nav>
      {children}
      <Outlet />
    </div>
  );
}

export default PublicLayout;
