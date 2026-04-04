import { Stack } from "expo-router";
import { ShoppingCart } from "./context/ShoppingCart";

export default function Layout() {
  return (
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
      </Stack>
    </ShoppingCart>
  );
}
