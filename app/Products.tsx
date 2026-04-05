import { useLocalSearchParams, useRouter } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTema } from "./context/Theme";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
};

const produtosPorCategoria: Record<string, Produto[]> = {
  "1": [
    {
      id: "101",
      nome: "X-Burger",
      preco: 22.9,
      descricao: "Pão, hambúrguer, queijo, alface e tomate.",
    },
    {
      id: "102",
      nome: "X-Salada",
      preco: 24.9,
      descricao: "Pão, hambúrguer, queijo, alface, tomate e maionese.",
    },
    {
      id: "103",
      nome: "X-Bacon",
      preco: 28.9,
      descricao: "Pão, hambúrguer, queijo, bacon crocante e molho especial.",
    },
  ],
  "2": [
    {
      id: "201",
      nome: "Refrigerante",
      preco: 6.9,
      descricao: "Lata 350ml. Coca-Cola, Guaraná ou Fanta.",
    },
    {
      id: "202",
      nome: "Suco Natural",
      preco: 9.9,
      descricao: "Copo 300ml. Laranja, limão ou abacaxi.",
    },
    {
      id: "203",
      nome: "Água Mineral",
      preco: 4.5,
      descricao: "Garrafa 500ml sem gás.",
    },
  ],
  "3": [
    {
      id: "301",
      nome: "Pudim",
      preco: 12.9,
      descricao: "Pudim de leite condensado com calda de caramelo.",
    },
    {
      id: "302",
      nome: "Brownie",
      preco: 10.9,
      descricao: "Brownie de chocolate com nozes.",
    },
    {
      id: "303",
      nome: "Açaí",
      preco: 15.9,
      descricao: "Tigela 300ml com granola e banana.",
    },
  ],
  "4": [
    {
      id: "401",
      nome: "Filé com Fritas",
      preco: 39.9,
      descricao: "Filé grelhado com batatas fritas e arroz.",
    },
    {
      id: "402",
      nome: "Frango Grelhado",
      preco: 34.9,
      descricao: "Peito de frango grelhado com legumes e purê.",
    },
    {
      id: "403",
      nome: "Picanha",
      preco: 49.9,
      descricao: "Picanha na chapa com arroz, feijão e vinagrete.",
    },
  ],
  "5": [
    {
      id: "501",
      nome: "Salada Caesar",
      preco: 19.9,
      descricao: "Alface, croutons, parmesão e molho caesar.",
    },
    {
      id: "502",
      nome: "Salada Tropical",
      preco: 17.9,
      descricao: "Mix de folhas, manga, palmito e molho de maracujá.",
    },
  ],
  "6": [
    {
      id: "601",
      nome: "Espaguete Carbonara",
      preco: 29.9,
      descricao: "Espaguete com molho carbonara e bacon.",
    },
    {
      id: "602",
      nome: "Lasanha Bolonhesa",
      preco: 32.9,
      descricao: "Lasanha com molho bolonhesa e queijo gratinado.",
    },
    {
      id: "603",
      nome: "Penne ao Pesto",
      preco: 27.9,
      descricao: "Penne com molho pesto e tomate seco.",
    },
  ],
};

export default function Products() {
  const { categoriaId, categoriaNome } = useLocalSearchParams<{
    categoriaId: string;
    categoriaNome: string;
  }>();
  const router = useRouter();
  const { cores } = useTema();

  const produtos = produtosPorCategoria[categoriaId] || [];

  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <Text style={[styles.titulo, { color: cores.texto }]}>
        {categoriaNome}
      </Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.cartao, { backgroundColor: cores.cartao }]}
            onPress={() =>
              router.push({
                pathname: "/ProductDetails",
                params: {
                  id: item.id,
                  nome: item.nome,
                  preco: String(item.preco),
                  descricao: item.descricao,
                },
              })
            }
          >
            <Text style={[styles.nomeProduto, { color: cores.texto }]}>
              {item.nome}
            </Text>
            <Text style={styles.precoProduto}>R$ {item.preco.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  lista: {
    gap: 12,
    paddingBottom: 24,
  },
  cartao: {
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nomeProduto: {
    fontSize: 18,
  },
  precoProduto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003f7a",
  },
});
