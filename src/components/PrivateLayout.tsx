import { Link, Outlet } from "react-router";
import rotas from "../routes/rotas";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Toaster position="top-right" />
      <h2>Área do Cliente</h2>
      <nav style={{ marginBottom: "20px" }}>
        <Link to={rotas.painel}>Painel</Link> |{" "}
        <Link to={rotas.checkout}>Checkout</Link>
      </nav>
      {children}
      <Outlet />
    </div>
  );
}

export default PrivateLayout;
