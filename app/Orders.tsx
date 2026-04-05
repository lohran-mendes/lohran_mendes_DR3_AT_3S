import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { useCarrinho } from "./context/ShoppingCart";
import { useTema } from "./context/Theme";

export default function Orders() {
  const { itens } = useCarrinho();
  const router = useRouter();
  const { cores } = useTema();

  const total = itens.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0,
  );

  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <Text style={[styles.titulo, { color: cores.texto }]}>
        Meus Pedidos{" - "}
        <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
      </Text>
      {itens.length === 0 ? (
        <Text style={[styles.vazio, { color: cores.subtexto }]}>
          Nenhum pedido no momento.
        </Text>
      ) : (
        <>
          <FlatList
            data={itens}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[styles.cartao, { backgroundColor: cores.cartao }]}
              >
                <Text style={[styles.nome, { color: cores.texto }]}>
                  {item.nome}
                </Text>
                <Text style={[styles.detalhes, { color: cores.subtexto }]}>
                  Qtd: {item.quantidade} — R${" "}
                  {(item.preco * item.quantidade).toFixed(2)}
                </Text>
              </View>
            )}
            contentContainerStyle={styles.lista}
          />
          <TouchableOpacity
            style={styles.botaoCheckout}
            onPress={() => router.push("/Checkout")}
          >
            <Text style={styles.botaoTexto}>Ir para Checkout</Text>
          </TouchableOpacity>
        </>
      )}
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
  vazio: {
    fontSize: 16,
    marginTop: 24,
  },
  lista: {
    gap: 12,
    paddingBottom: 24,
  },
  cartao: {
    padding: 16,
    borderRadius: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  detalhes: {
    fontSize: 14,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
    paddingVertical: 16,
  },
  botaoCheckout: {
    backgroundColor: "#003f7a",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
