import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCarrinho } from "./context/ShoppingCart";
import { useTema } from "./context/Theme";

export default function ProductDetails() {
  const { id, nome, preco, descricao } = useLocalSearchParams<{
    id: string;
    nome: string;
    preco: string;
    descricao: string;
  }>();
  const router = useRouter();
  const { adicionarItem } = useCarrinho();
  const { cores } = useTema();

  const [quantidade, setQuantidade] = useState(1);
  const precoNumerico = parseFloat(preco);

  function adicionarAoCarrinho() {
    adicionarItem({
      id,
      nome,
      preco: precoNumerico,
      quantidade,
    });
    Alert.alert(
      "Adicionado ao carrinho",
      `${quantidade}x ${nome} adicionado(s).`,
      [{ text: "OK", onPress: () => router.back() }],
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <Text style={[styles.nome, { color: cores.texto }]}>{nome}</Text>
      <Text style={[styles.descricao, { color: cores.subtexto }]}>
        {descricao}
      </Text>
      <Text style={styles.preco}>R$ {precoNumerico.toFixed(2)}</Text>

      <View style={styles.linhaQuantidade}>
        <TouchableOpacity
          style={[styles.botaoQuantidade, { backgroundColor: cores.cartao }]}
          onPress={() => setQuantidade((q) => Math.max(1, q - 1))}
        >
          <Text style={[styles.textoBotaoQuantidade, { color: cores.texto }]}>
            -
          </Text>
        </TouchableOpacity>
        <Text style={[styles.textoQuantidade, { color: cores.texto }]}>
          {quantidade}
        </Text>
        <TouchableOpacity
          style={[styles.botaoQuantidade, { backgroundColor: cores.cartao }]}
          onPress={() => setQuantidade((q) => q + 1)}
        >
          <Text style={[styles.textoBotaoQuantidade, { color: cores.texto }]}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.total, { color: cores.texto }]}>
        Total: R$ {(precoNumerico * quantidade).toFixed(2)}
      </Text>

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={adicionarAoCarrinho}
      >
        <Text style={styles.textoBotaoAdicionar}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 16,
  },
  preco: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003f7a",
    marginBottom: 24,
  },
  linhaQuantidade: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    gap: 20,
  },
  botaoQuantidade: {
    width: 44,
    height: 44,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textoBotaoQuantidade: {
    fontSize: 22,
    fontWeight: "bold",
  },
  textoQuantidade: {
    fontSize: 20,
    fontWeight: "bold",
    minWidth: 30,
    textAlign: "center",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  botaoAdicionar: {
    backgroundColor: "#003f7a",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotaoAdicionar: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
