import { Image, StyleSheet, Text, View } from "react-native";

const usuarioMock = {
  nome: "Lohran Mendes",
  email: "lohranfm@gmail.com",
  avatar: require("../assets/images/perfil.jpg"),
};

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil</Text>
      <Image source={usuarioMock.avatar} style={styles.avatar} />
      <View style={styles.card}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.valor}>{usuarioMock.nome}</Text>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.valor}>{usuarioMock.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#fff",
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
    borderColor: "#ccc",
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginTop: 12,
  },
  valor: {
    fontSize: 18,
    marginTop: 4,
  },
});
