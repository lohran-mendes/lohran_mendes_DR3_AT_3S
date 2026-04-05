import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTema } from "./context/Theme";

const restaurantes = [
  { id: "1", nome: "Confeitaria Colombo", endereco: "R. Gonçalves Dias, 32", cardapio: "Pastel de Belém - R$ 12,00" },
  { id: "2", nome: "Bar Luiz", endereco: "R. da Carioca, 39", cardapio: "Eisbein com Chucrute - R$ 65,00" },
  { id: "3", nome: "Brasserie Rosário", endereco: "R. do Rosário, 34", cardapio: "Confit de Pato - R$ 78,00" },
  { id: "4", nome: "Cais do Oriente", endereco: "R. Visconde de Itaboraí, 8", cardapio: "Salmão Grelhado - R$ 72,00" },
  { id: "5", nome: "Albamar", endereco: "Praça Marechal Âncora, 186", cardapio: "Moqueca de Camarão - R$ 89,00" },
  { id: "6", nome: "Restaurante Mosteiro", endereco: "R. São Bento, 13", cardapio: "Bacalhau à Brás - R$ 68,00" },
  { id: "7", nome: "Ancoramar", endereco: "Praça Marechal Âncora, 184", cardapio: "Filé de Peixe - R$ 55,00" },
  { id: "8", nome: "Cedro do Líbano", endereco: "R. Senador Dantas, 35", cardapio: "Kafta com Homus - R$ 48,00" },
  { id: "9", nome: "Rancho Inn", endereco: "R. da Assembleia, 46", cardapio: "Picanha na Brasa - R$ 75,00" },
  { id: "10", nome: "Rio Minho", endereco: "R. do Ouvidor, 10", cardapio: "Arroz de Polvo - R$ 82,00" },
];

export default function RestaurantDetails() {
  const { cores } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <Text style={[styles.titulo, { color: cores.texto }]}>Restaurantes</Text>
      <FlatList
        data={restaurantes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.cartao, { backgroundColor: cores.cartao }]}
          >
            <Text style={[styles.textoCartao, { color: cores.texto }]}>
              {item.nome}
            </Text>
            <Text style={[styles.subtexto, { color: cores.subtexto }]}>
              {item.endereco}
            </Text>
            <Text style={[styles.subtexto, { color: cores.subtexto }]}>
              Cardápio: {item.cardapio}
            </Text>
          </TouchableOpacity>
        )}
      />
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
  lista: {
    gap: 12,
    paddingBottom: 24,
  },
  cartao: {
    padding: 16,
    borderRadius: 8,
  },
  textoCartao: {
    fontSize: 18,
  },
  subtexto: {
    fontSize: 14,
    marginTop: 4,
  },
});
