import { Image, StyleSheet, Text, View } from "react-native";
import { useTema } from "./context/Theme";

const usuarioMock = {
  nome: "Lohran Mendes",
  email: "lohranfm@gmail.com",
  avatar: require("../assets/images/perfil.jpg"),
};

export default function Profile() {
  const { cores } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <Text style={[styles.titulo, { color: cores.texto }]}>Perfil</Text>
      <Image source={usuarioMock.avatar} style={styles.avatar} />
      <View style={[styles.card, { borderColor: cores.borda }]}>
        <Text style={[styles.label, { color: cores.subtexto }]}>Nome:</Text>
        <Text style={[styles.valor, { color: cores.texto }]}>
          {usuarioMock.nome}
        </Text>
        <Text style={[styles.label, { color: cores.subtexto }]}>E-mail:</Text>
        <Text style={[styles.valor, { color: cores.texto }]}>
          {usuarioMock.email}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 24,
  },
  card: {
    width: "80%",
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    marginTop: 12,
  },
  valor: {
    fontSize: 18,
    marginTop: 4,
  },
});
