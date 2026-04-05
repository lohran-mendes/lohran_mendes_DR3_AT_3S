import { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useCarrinho } from "./context/ShoppingCart";

const metodosPagamento = ["Cartão de Crédito", "Cartão de Débito", "Pix", "Dinheiro"];

export default function Checkout() {
  const { itens } = useCarrinho();
  const [endereco, setEndereco] = useState("");
  const [pagamentoSelecionado, setPagamentoSelecionado] = useState("");

  const total = itens.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0,
  );

  const finalizar = () => {
    if (!endereco.trim()) {
      Alert.alert("Erro", "Preencha o endereço de entrega.");
      return;
    }
    if (!pagamentoSelecionado) {
      Alert.alert("Erro", "Selecione um método de pagamento.");
      return;
    }
    Alert.alert("Sucesso", "Pedido realizado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Checkout</Text>

      <Text style={styles.secao}>Resumo do Pedido</Text>
      {itens.length === 0 ? (
        <Text style={styles.vazio}>Carrinho vazio.</Text>
      ) : (
        <FlatList
          data={itens}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartao}>
              <Text>{item.nome} x{item.quantidade}</Text>
              <Text>R$ {(item.preco * item.quantidade).toFixed(2)}</Text>
            </View>
          )}
          contentContainerStyle={styles.lista}
          ListFooterComponent={
            <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
          }
        />
      )}

      <Text style={styles.secao}>Endereço de Entrega</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <Text style={styles.secao}>Método de Pagamento</Text>
      {metodosPagamento.map((metodo) => (
        <TouchableOpacity
          key={metodo}
          style={[
            styles.opcao,
            pagamentoSelecionado === metodo && styles.opcaoSelecionada,
          ]}
          onPress={() => setPagamentoSelecionado(metodo)}
        >
          <Text>{metodo}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.botao} onPress={finalizar}>
        <Text style={styles.botaoTexto}>Finalizar Pedido</Text>
      </TouchableOpacity>
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
  secao: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  vazio: {
    fontSize: 16,
    color: "#888",
  },
  lista: {
    gap: 8,
  },
  cartao: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  opcao: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    marginBottom: 8,
  },
  opcaoSelecionada: {
    backgroundColor: "#cce0ff",
    borderWidth: 1,
    borderColor: "#003f7a",
  },
  botao: {
    backgroundColor: "#003f7a",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 32,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
