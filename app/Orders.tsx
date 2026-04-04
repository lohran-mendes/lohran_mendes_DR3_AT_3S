import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

type Pedido = {
  id: string;
  itens: string[];
  total: number;
  data: string;
};

const pedidosMock: Pedido[] = [
  {
    id: "1",
    itens: ["X-Burger", "Refrigerante"],
    total: 35.9,
    data: "04/04/2026",
  },
  {
    id: "2",
    itens: ["Pizza Margherita"],
    total: 42.0,
    data: "03/04/2026",
  },
  {
    id: "3",
    itens: ["Salada Caesar", "Suco Natural"],
    total: 29.5,
    data: "02/04/2026",
  },
  {
    id: "4",
    itens: ["Lasanha Bolonhesa", "Brownie"],
    total: 55.0,
    data: "01/04/2026",
  },
];

export default function Orders() {
  const [pedidos] = useState<Pedido[]>(pedidosMock);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Pedidos</Text>
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartao}>
            <Text style={styles.data}>{item.data}</Text>
            <Text style={styles.itens}>{item.itens.join(", ")}</Text>
            <Text style={styles.total}>R$ {item.total.toFixed(2)}</Text>
          </View>
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
  data: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
  },
  itens: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  total: {
    fontSize: 14,
    marginBottom: 4,
  },
});
