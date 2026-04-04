import { createContext, ReactNode, useContext, useState } from "react";

export type ItemCarrinho = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
};

type TipoContextoCarrinho = {
  itens: ItemCarrinho[];
  adicionarItem: (item: ItemCarrinho) => void;
};

const ContextoCarrinho = createContext<TipoContextoCarrinho>({
  itens: [],
  adicionarItem: () => {},
});

export function ShoppingCart({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  function adicionarItem(novoItem: ItemCarrinho) {
    setItens((anterior) => {
      const existente = anterior.find((i) => i.id === novoItem.id);
      if (existente) {
        return anterior.map((i) =>
          i.id === novoItem.id
            ? { ...i, quantidade: i.quantidade + novoItem.quantidade }
            : i,
        );
      }
      return [...anterior, novoItem];
    });
  }

  return (
    <ContextoCarrinho.Provider value={{ itens, adicionarItem }}>
      {children}
    </ContextoCarrinho.Provider>
  );
}

export function useCarrinho() {
  return useContext(ContextoCarrinho);
}
