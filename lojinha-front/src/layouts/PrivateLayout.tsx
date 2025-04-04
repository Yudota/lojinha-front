import { Link, Outlet } from "react-router";

function PrivateLayout(){
	return (
    <div>
      <h2>Área do Cliente</h2>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/painel">Painel</Link> |{' '}
        <Link to="/checkout">Checkout</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default PrivateLayout;