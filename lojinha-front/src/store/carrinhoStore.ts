import { create } from "zustand";
import { ItemCarrinho } from "../types/ItemCarrinho";

type CarrinhoState = {
	itens: ItemCarrinho[]
	adicionarItem: (item: ItemCarrinho) => void
	removerItem: (id: string) => void
}

const useCarrinhoStore = create<CarrinhoState>((set) => ({
	itens: [],
	adicionarItem: (item) => set((state) => ({ itens: [...state.itens, item] })),
	removerItem: (id: string) => set((state) => ({ itens: state.itens.filter(i => i.id !== id) })),
}))

export default useCarrinhoStore;