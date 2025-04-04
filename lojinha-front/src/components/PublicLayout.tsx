import { Link, Outlet } from "react-router";
import rotas from "../routes/rotas";
import { ReactNode } from "react";

function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to={rotas.home}>Home</Link> |{' '}
        <Link to={rotas.produtos}>Produtos</Link> |{' '}
        <Link to={rotas.carrinho}>Carrinho</Link> |{' '}
        <Link to={rotas.login}>Login</Link>
      </nav>
      {children}
      <Outlet />
    </div>
  )
}

export default PublicLayout;