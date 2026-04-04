import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Home" options={{ title: "InfnetFood" }} />
      <Stack.Screen name="Categories" options={{ title: "Categorias" }} />
      <Stack.Screen name="Login" options={{ title: "Login" }} />
    </Stack>
  );
}
