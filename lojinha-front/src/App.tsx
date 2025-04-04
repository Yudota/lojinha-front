import 'react'
import Home from './features/home/Home'
import { Routes, Route } from 'react-router-dom';
import Cadastro from './features/cliente/Cadastro';
import Carrinho from './features/cliente/Carrinho';
import Checkout from './features/cliente/Checkout';
import Login from './features/cliente/Login';
import PainelCliente from './features/cliente/PainelCliente';
import DetalheProduto from './features/produtos/DetalheProduto';
import ListaProdutos from './features/produtos/ListaProdutos';
import rotas from './routes/rotas';
import PublicLayout from './components/PublicLayout';
import PrivateLayout from './components/PrivateLayout';
function App() {
   return (
      <Routes>
        <Route index path={rotas.home} element={<PublicLayout><Home /></PublicLayout>} />
        <Route path={rotas.produtos} element={<PublicLayout><ListaProdutos /></PublicLayout>} />
        <Route path={rotas.produto(':slug')} element={<PublicLayout><DetalheProduto /></PublicLayout>} />
        <Route path={rotas.carrinho} element={<PublicLayout><Carrinho /></PublicLayout>} />
        <Route path={rotas.login} element={<PublicLayout><Login /></PublicLayout>} />
        <Route path={rotas.cadastro} element={<PublicLayout><Cadastro /></PublicLayout>} />
        <Route path={rotas.painel} element={<PrivateLayout><PainelCliente /></PrivateLayout>} />
        <Route path={rotas.checkout} element={<PrivateLayout><Checkout /></PrivateLayout>} />
      </Routes>
  )
}

export default App;
