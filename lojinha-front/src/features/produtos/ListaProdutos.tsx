import { useState } from "react";
import { Link } from "react-router";
import PageWrapper from "../../components/PageWrapper";
import rotas from "../../routes/rotas";

function ListaProdutos() {
	const [produtos] = useState([
		{ id: 1, nome: 'Produto A', slug: 'produto-a' },
		{ id: 2, nome: 'Produto B', slug: 'produto-b' },
		{ id: 3, nome: 'Produto C', slug: 'produto-c' },
	])

	return (
		<PageWrapper title="Lista de Produtos">
			<ul>
				{produtos.map(produto => (
					<li key={produto.id}>
						<Link to={rotas.produto(produto.slug)}>{produto.nome}</Link>
					</li>
				))}
			</ul>
		</PageWrapper>
	)
}
export default ListaProdutos;