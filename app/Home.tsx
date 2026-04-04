import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const roteador = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>InfnetFood</Text>
      <Text style={styles.subtitulo}>Bem-vindo ao InfnetFood!</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => roteador.push("/Categories")}
      >
        <Text style={styles.textoBotao}>Ver Categorias</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.botao, { marginTop: 12 }]}
        onPress={() => roteador.push("/Login")}
      >
        <Text style={styles.textoBotao}>Ir para Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 18,
    color: "#666",
    marginBottom: 24,
  },
  botao: {
    backgroundColor: "#003f7a",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
