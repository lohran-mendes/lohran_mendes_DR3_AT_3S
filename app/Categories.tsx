import { StyleSheet, Text, View, FlatList } from "react-native";

const categories = [
  { id: "1", name: "Lanches" },
  { id: "2", name: "Bebidas" },
  { id: "3", name: "Sobremesas" },
  { id: "4", name: "Pratos Principais" },
  { id: "5", name: "Saladas" },
  { id: "6", name: "Massas" },
];

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  list: {
    gap: 12,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 18,
  },
});
