import { Stack } from "expo-router";
import { ShoppingCart } from "./context/ShoppingCart";
import { ThemeProvider } from "./context/Theme";

export default function Layout() {
  return (
    <ThemeProvider>
      <ShoppingCart>
        <Stack>
          <Stack.Screen name="Home" options={{ title: "InfnetFood" }} />
          <Stack.Screen name="Categories" options={{ title: "Categorias" }} />
          <Stack.Screen name="Login" options={{ title: "Login" }} />
          <Stack.Screen name="Products" options={{ title: "Produtos" }} />
          <Stack.Screen
            name="ProductDetails"
            options={{ title: "Detalhes do Produto" }}
          />
          <Stack.Screen name="Profile" options={{ title: "Perfil" }} />
          <Stack.Screen name="Orders" options={{ title: "Pedidos" }} />
          <Stack.Screen name="Map" options={{ title: "Mapa" }} />
          <Stack.Screen
            name="RestaurantDetails"
            options={{ title: "Restaurantes" }}
          />
          <Stack.Screen name="Checkout" options={{ title: "Checkout" }} />
          <Stack.Screen
            name="Settings"
            options={{ title: "Configurações" }}
          />
        </Stack>
      </ShoppingCart>
    </ThemeProvider>
  );
}
