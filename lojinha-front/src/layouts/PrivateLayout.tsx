import { Link, Outlet } from "react-router";
import rotas from "../rotas";

function PrivateLayout(){
 return (
    <div>
      <h2>Área do Cliente</h2>
      <nav style={{ marginBottom: '20px' }}>
        <Link to={rotas.painel}>Painel</Link> |{' '}
        <Link to={rotas.checkout}>Checkout</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default PrivateLayout;