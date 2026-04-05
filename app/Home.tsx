import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTema } from "./context/Theme";

export default function Home() {
  const roteador = useRouter();
  const { cores } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <Text style={[styles.titulo, { color: cores.texto }]}>InfnetFood</Text>
      <Text style={[styles.subtitulo, { color: cores.subtexto }]}>
        Bem-vindo ao InfnetFood!
      </Text>
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
      <TouchableOpacity
        style={[styles.botao, { marginTop: 12 }]}
        onPress={() => roteador.push("/Profile")}
      >
        <Text style={styles.textoBotao}>Meu Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.botao, { marginTop: 12 }]}
        onPress={() => roteador.push("/Orders")}
      >
        <Text style={styles.textoBotao}>Meus Pedidos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.botao, { marginTop: 12 }]}
        onPress={() => roteador.push("/Map")}
      >
        <Text style={styles.textoBotao}>Mapa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.botao, { marginTop: 12 }]}
        onPress={() => roteador.push("/RestaurantDetails")}
      >
        <Text style={styles.textoBotao}>Restaurantes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.botao, { marginTop: 12 }]}
        onPress={() => roteador.push("/Settings")}
      >
        <Text style={styles.textoBotao}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 18,
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
