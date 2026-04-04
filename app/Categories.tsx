import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const categorias = [
  { id: "1", nome: "Lanches" },
  { id: "2", nome: "Bebidas" },
  { id: "3", nome: "Sobremesas" },
  { id: "4", nome: "Pratos Principais" },
  { id: "5", nome: "Saladas" },
  { id: "6", nome: "Massas" },
];

export default function Categorias() {
  const roteador = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Categorias</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cartao}
            onPress={() =>
              roteador.push({
                pathname: "/Products",
                params: { categoriaId: item.id, categoriaNome: item.nome },
              })
            }
          >
            <Text style={styles.textoCartao}>{item.nome}</Text>
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
    backgroundColor: "#fff",
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
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 8,
  },
  textoCartao: {
    fontSize: 18,
  },
});
