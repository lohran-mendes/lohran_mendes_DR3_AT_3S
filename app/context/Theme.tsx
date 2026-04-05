import { createContext, ReactNode, useContext, useState } from "react";

type Cores = {
  fundo: string;
  texto: string;
  subtexto: string;
  cartao: string;
  borda: string;
};

type TipoContextoTema = {
  temaEscuro: boolean;
  setTemaEscuro: (valor: boolean) => void;
  cores: Cores;
};

const coresClaro: Cores = {
  fundo: "#fff",
  texto: "#000",
  subtexto: "#666",
  cartao: "#f0f0f0",
  borda: "#ccc",
};

const coresEscuro: Cores = {
  fundo: "#121212",
  texto: "#fff",
  subtexto: "#aaa",
  cartao: "#1e1e1e",
  borda: "#444",
};

const ContextoTema = createContext<TipoContextoTema>({
  temaEscuro: false,
  setTemaEscuro: () => {},
  cores: coresClaro,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const cores = temaEscuro ? coresEscuro : coresClaro;

  return (
    <ContextoTema.Provider value={{ temaEscuro, setTemaEscuro, cores }}>
      {children}
    </ContextoTema.Provider>
  );
}

export function useTema() {
  return useContext(ContextoTema);
}
