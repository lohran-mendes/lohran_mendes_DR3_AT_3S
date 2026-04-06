import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useCarrinho } from "./context/ShoppingCart";
import { useTema } from "./context/Theme";

const metodosPagamento = ["Cartão de Crédito", "Cartão de Débito", "Pix", "Dinheiro"];

export default function Checkout() {
  const { itens } = useCarrinho();
  const { cores } = useTema();
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [buscandoCep, setBuscandoCep] = useState(false);
  const [pagamentoSelecionado, setPagamentoSelecionado] = useState("");

  async function buscarCep(valor: string) {
    const cepLimpo = valor.replace(/\D/g, "");
    setCep(valor);
    setRua("");

    if (cepLimpo.length !== 8) return;

    setBuscandoCep(true);
    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const dados = await resposta.json();
      if (dados.erro) {
        Alert.alert("Erro", "CEP não encontrado.");
      } else {
        setRua(`${dados.logradouro}, ${dados.bairro} - ${dados.localidade}/${dados.uf}`);
      }
    } catch {
      Alert.alert("Erro", "Não foi possível buscar o CEP.");
    } finally {
      setBuscandoCep(false);
    }
  }

  const total = itens.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0,
  );

  const finalizar = () => {
    if (!rua) {
      Alert.alert("Erro", "Informe um CEP válido para entrega.");
      return;
    }
    if (!pagamentoSelecionado) {
      Alert.alert("Erro", "Selecione um método de pagamento.");
      return;
    }
    Alert.alert("Sucesso", "Pedido realizado com sucesso!");
  };

  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <Text style={[styles.titulo, { color: cores.texto }]}>Checkout</Text>

      <Text style={[styles.secao, { color: cores.texto }]}>
        Resumo do Pedido
      </Text>
      {itens.length === 0 ? (
        <Text style={[styles.vazio, { color: cores.subtexto }]}>
          Carrinho vazio.
        </Text>
      ) : (
        <FlatList
          data={itens}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[styles.cartao, { backgroundColor: cores.cartao }]}
            >
              <Text style={{ color: cores.texto }}>
                {item.nome} x{item.quantidade}
              </Text>
              <Text style={{ color: cores.texto }}>
                R$ {(item.preco * item.quantidade).toFixed(2)}
              </Text>
            </View>
          )}
          contentContainerStyle={styles.lista}
          ListFooterComponent={
            <Text style={[styles.total, { color: cores.texto }]}>
              Total: R$ {total.toFixed(2)}
            </Text>
          }
        />
      )}

      <Text style={[styles.secao, { color: cores.texto }]}>
        CEP de Entrega
      </Text>
      <TextInput
        style={[
          styles.input,
          { borderColor: cores.borda, color: cores.texto },
        ]}
        placeholder="Digite o CEP (ex: 01001000)"
        placeholderTextColor={cores.subtexto}
        value={cep}
        onChangeText={buscarCep}
        keyboardType="numeric"
        maxLength={9}
      />
      {buscandoCep && <ActivityIndicator style={{ marginTop: 8 }} />}
      {rua !== "" && (
        <Text style={[styles.ruaTexto, { color: cores.texto }]}>{rua}</Text>
      )}

      <Text style={[styles.secao, { color: cores.texto }]}>
        Método de Pagamento
      </Text>
      {metodosPagamento.map((metodo) => (
        <TouchableOpacity
          key={metodo}
          style={[
            styles.opcao,
            { backgroundColor: cores.cartao },
            pagamentoSelecionado === metodo && styles.opcaoSelecionada,
          ]}
          onPress={() => setPagamentoSelecionado(metodo)}
        >
          <Text style={{ color: cores.texto }}>{metodo}</Text>
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
  },
  lista: {
    gap: 8,
  },
  cartao: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  ruaTexto: {
    fontSize: 14,
    marginTop: 8,
    fontStyle: "italic",
  },
  opcao: {
    padding: 12,
    borderRadius: 8,
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
