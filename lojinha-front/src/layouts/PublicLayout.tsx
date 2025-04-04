import { Link, Outlet } from "react-router";

function PublicLayout(){
	return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/produtos">Produtos</Link> |{' '}
        <Link to="/carrinho">Carrinho</Link> |{' '}
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default PublicLayout;