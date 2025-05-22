import useCarrinhoStore from "../../store/carrinhoStore";

export default function Carrinho() {
  const itens = useCarrinhoStore((state) => state.itens);
  const removerItem = useCarrinhoStore((state) => state.removerItem);
  const alterarQuantidade = useCarrinhoStore(
    (state) => state.alterarQuantidade
  );
  const limparCarrinho = useCarrinhoStore((state) => state.limparCarrinho);
  const total = useCarrinhoStore((state) => state.total());

  return (
    <div>
      <h2>Carrinho</h2>
      {itens.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {itens.map((item) => (
            <li key={item.id}>
              {item.nome} - R${item.preco.toFixed(2)} x{" "}
              <input
                type="number"
                min="1"
                value={item.quantidade}
                onChange={(e) =>
                  alterarQuantidade(item.id, Number(e.target.value))
                }
              />{" "}
              <button onClick={() => removerItem(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <p>
        <strong>Total:</strong> R${total.toFixed(2)}
      </p>
      {itens.length > 0 && (
        <button onClick={limparCarrinho}>Limpar Carrinho</button>
      )}
    </div>
  );
}
