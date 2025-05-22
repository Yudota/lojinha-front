import Produto from "./Produto";

export default interface ItemCarrinho extends Produto {
  quantidade: number;
}
