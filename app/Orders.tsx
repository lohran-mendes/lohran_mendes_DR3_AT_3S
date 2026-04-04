import { FlatList, StyleSheet, Text, View } from "react-native";
import { useCarrinho } from "./context/ShoppingCart";

export default function Orders() {
  const { itens } = useCarrinho();

  const total = itens.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Meus Pedidos{" - "}
        <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
      </Text>
      {itens.length === 0 ? (
        <Text style={styles.vazio}>Nenhum pedido no momento.</Text>
      ) : (
        <>
          <FlatList
            data={itens}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartao}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.detalhes}>
                  Qtd: {item.quantidade} — R${" "}
                  {(item.preco * item.quantidade).toFixed(2)}
                </Text>
              </View>
            )}
            contentContainerStyle={styles.lista}
          />
        </>
      )}
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
  vazio: {
    fontSize: 16,
    color: "#888",
    marginTop: 24,
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
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  detalhes: {
    fontSize: 14,
    color: "#555",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
    paddingVertical: 16,
  },
});
