import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { useTema } from "./context/Theme";

export default function Settings() {
  const { temaEscuro: temaAtual, setTemaEscuro, cores } = useTema();
  const [temaEscuro, setTemaLocal] = useState(temaAtual);

  const alterarTema = (valor: boolean) => {
    setTemaLocal(valor);
    setTemaEscuro(valor);
  };

  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <Text style={[styles.titulo, { color: cores.texto }]}>
        Configurações
      </Text>

      <View style={styles.opcao}>
        <Text style={[styles.label, { color: cores.texto }]}>Tema Escuro</Text>
        <Switch value={temaEscuro} onValueChange={alterarTema} />
      </View>

      <Text style={{ color: cores.subtexto, marginTop: 16 }}>
        Tema atual: {temaEscuro ? "Escuro" : "Claro"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  opcao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
  },
});
