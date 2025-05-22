import { useParams } from "react-router"
import PageWrapper from "../../components/PageWrapper"

function DetalheProduto() {
	const { slug } = useParams()
	const produtosMock = [
		{ slug: 'produto-a', nome: 'Produto A', descricao: 'Descrição do Produto A' },
		{ slug: 'produto-b', nome: 'Produto B', descricao: 'Descrição do Produto B' },
		{ slug: 'produto-c', nome: 'Produto C', descricao: 'Descrição do Produto C' },
	]

	const produto = produtosMock.find(p => p.slug === slug)
	if (!produto) return <PageWrapper title="Erro">Produto não encontrado.</PageWrapper>

	return <PageWrapper title={produto.nome}>{produto.descricao}</PageWrapper>
}
export default DetalheProduto;