import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ItemCarrinho, Produto } from "../types";

interface CarrinhoState {
  itens: ItemCarrinho[];
  adicionarItem: (item: Produto) => void;
  removerItem: (id: number) => void;
  alterarQuantidade: (id: number, quantidade: number) => void;
  limparCarrinho: () => void;
  total: () => number;
}

const useCarrinhoStore = create<CarrinhoState>()(
  persist(
    (set, get) => ({
      itens: [],

      adicionarItem: (novoItem) => {
        const { itens } = get();
        const existe = itens.find((item) => item.id === novoItem.id);

        if (existe) {
          set({
            itens: itens.map((item) =>
              item.id === novoItem.id
                ? { ...item, quantidade: item.quantidade + 1 }
                : item
            ),
          });
        } else {
          set({ itens: [...itens, { ...novoItem, quantidade: 1 }] });
        }
      },

      removerItem: (id) => {
        set((state) => ({
          itens: state.itens.filter((item) => item.id !== id),
        }));
      },

      alterarQuantidade: (id, quantidade) => {
        set((state) => ({
          itens: state.itens.map((item) =>
            item.id === id ? { ...item, quantidade } : item
          ),
        }));
      },

      limparCarrinho: () => set({ itens: [] }),

      total: () => {
        return get().itens.reduce(
          (total, item) => total + item.preco * item.quantidade,
          0
        );
      },
    }),
    {
      name: "carrinho-persistido", // chave no localStorage
    }
  )
);

export default useCarrinhoStore;
