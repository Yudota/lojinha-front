import PageWrapper from "../../components/PageWrapper";
import Carrinho from "../carrinho/Carrinho";
import ListaProdutos from "../produtos/ListaProdutos";

function Home() {
  return (
    <PageWrapper title="Página Inicial">
      Bem-vindo à loja!
      <ListaProdutos />
      <hr />
      <Carrinho />
    </PageWrapper>
  );
}

export default Home;
