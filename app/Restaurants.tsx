import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const restaurantes = [
  {
    nome: "Confeitaria Colombo",
    tipo: "Café & Confeitaria",
    nota: 4.7,
    lat: -22.9058,
    lng: -43.1767,
  },
  {
    nome: "Bar Luiz",
    tipo: "Alemã & Brasileira",
    nota: 4.3,
    lat: -22.9065,
    lng: -43.1785,
  },
  {
    nome: "Brasserie Rosário",
    tipo: "Francesa",
    nota: 4.5,
    lat: -22.9035,
    lng: -43.176,
  },
  {
    nome: "Cais do Oriente",
    tipo: "Asiática & Brasileira",
    nota: 4.6,
    lat: -22.902,
    lng: -43.174,
  },
  {
    nome: "Albamar",
    tipo: "Frutos do Mar",
    nota: 4.4,
    lat: -22.901,
    lng: -43.1705,
  },
  {
    nome: "Restaurante Mosteiro",
    tipo: "Portuguesa",
    nota: 4.2,
    lat: -22.908,
    lng: -43.1755,
  },
  {
    nome: "Ancoramar",
    tipo: "Frutos do Mar",
    nota: 4.1,
    lat: -22.8995,
    lng: -43.172,
  },
  {
    nome: "Cedro do Líbano",
    tipo: "Árabe",
    nota: 4.3,
    lat: -22.905,
    lng: -43.18,
  },
  {
    nome: "Rancho Inn",
    tipo: "Churrascaria",
    nota: 4.0,
    lat: -22.9072,
    lng: -43.173,
  },
  {
    nome: "Rio Minho",
    tipo: "Portuguesa",
    nota: 4.5,
    lat: -22.9045,
    lng: -43.171,
  },
];

// aqui eu precisei de ajuda de IA para me ajudar com os marcadores do mapa e o código html, estava com dificuldade de montar o código html para o mapa
const markers = restaurantes
  .map(
    (r) =>
      `L.marker([${r.lat},${r.lng}]).addTo(map).bindPopup("<b>${r.nome}</b><br>${r.tipo}<br>Nota: ${r.nota}");`,
  )
  .join("\n");

const html = `
<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<style>html,body,#map{margin:0;height:100%;width:100%}</style>
</head><body>
<div id="map"></div>
<script>
var map=L.map('map').setView([-22.904,-43.175],15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'OpenStreetMap'}).addTo(map);
${markers}
</script>
</body></html>
`;

export default function Restaurants() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Restaurantes</Text>
      {Platform.OS === "web" ? (
        <iframe
          srcDoc={html}
          style={{ height: "60vh", border: "none", borderRadius: 8 } as any}
        />
      ) : (
        <View style={styles.mapaContainer}>
          <WebView source={{ html }} style={{ flex: 1 }} />
        </View>
      )}
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
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  mapaContainer: {
    height: Dimensions.get("window").height * 0.7,
    borderRadius: 8,
    overflow: "hidden",
  },
});
