import { useState } from "react";
import { Link } from "react-router";
import PageWrapper from "../../components/PageWrapper";
import rotas from "../../routes/rotas";
import { toast } from "react-hot-toast";
import useCarrinhoStore from "../../store/carrinhoStore";
import { Produto } from "../../types";
import { Button } from "../../components/ui/button";

import "./ListaProdutos.css";

function ListaProdutos() {
  const [produtos] = useState<Produto[]>([
    { id: 1, nome: "Item 1", preco: 10.0 },
    { id: 2, nome: "Item 2", preco: 10.0 },
    { id: 3, nome: "Item 3", preco: 10.0 },
    { id: 4, nome: "Item 4", preco: 10.0 },
    { id: 5, nome: "Item 5", preco: 10.0 },
    { id: 6, nome: "Item 6", preco: 10.0 },
  ]);

  const adicionarItem = useCarrinhoStore((state) => state.adicionarItem);

  const handleAdicionar = (produto: Produto) => {
    adicionarItem(produto);
    toast.success(`${produto.nome} adicionada ao carrinho!`);
  };

  return (
    <PageWrapper title="Lista de Produtos">
      <h2>Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li className="teste" key={produto.id}>
            <Link to={rotas.produto(produto.id.toString())}>
              {`Imagem do ${produto.nome}`}
            </Link>
            {` ${produto.nome} - R$ ${produto.preco.toFixed(2)} `}
            <Button onClick={() => handleAdicionar(produto)}>Adicionar</Button>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
export default ListaProdutos;
