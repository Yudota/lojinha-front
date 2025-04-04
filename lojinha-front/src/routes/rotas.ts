const rotas = {
	home: '/',
	produtos: '/produtos',
	produto: (slug: string) => `/produto/${slug}`,
	carrinho: '/carrinho',
	login: '/login',
	cadastro: '/cadastro',
	painel: '/painel',
	checkout: '/painel/checkout',
}
export default rotas;