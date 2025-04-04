import PageWrapper from "../../components/PageWrapper";
import useCarrinhoStore from "../../store/carrinhoStore";

function Carrinho() {
  const { itens } = useCarrinhoStore()
  return (
    <PageWrapper title="Carrinho">
      {itens.length === 0 ? 'Seu carrinho está vazio' : <ul>{itens.map((item, index) => <li key={index}>{item.nome}</li>)}</ul>}
    </PageWrapper>
  )
}
export default Carrinho;