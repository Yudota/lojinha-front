import { Link, Outlet } from "react-router";
import rotas from "../rotas";

function PublicLayout(){
return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to={rotas.home}>Home</Link> |{' '}
        <Link to={rotas.produtos}>Produtos</Link> |{' '}
        <Link to={rotas.carrinho}>Carrinho</Link> |{' '}
        <Link to={rotas.login}>Login</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default PublicLayout;