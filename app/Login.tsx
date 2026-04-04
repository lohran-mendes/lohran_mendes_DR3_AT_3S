import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  function validarEmail(valor: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  }

  function validaAoEntrar() {
    let valido = true;

    if (!email.trim()) {
      setErroEmail("O campo e-mail é obrigatório.");
      valido = false;
    } else if (!validarEmail(email)) {
      setErroEmail("Formato de e-mail inválido.");
      valido = false;
    } else {
      setErroEmail("");
    }

    if (!senha.trim()) {
      setErroSenha("O campo senha é obrigatório.");
      valido = false;
    } else if (senha.length < 6) {
      setErroSenha("A senha deve ter pelo menos 6 caracteres.");
      valido = false;
    } else {
      setErroSenha("");
    }

    if (valido) {
      Alert.alert("Login realizado", `Bem-vindo, ${email}!`);
      router.replace("/Categories");
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={[styles.input, erroEmail ? styles.inputErro : null]}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(texto) => {
          setEmail(texto);
          if (erroEmail) setErroEmail("");
        }}
      />
      {erroEmail ? <Text style={styles.erroText}>{erroEmail}</Text> : null}

      <TextInput
        style={[styles.input, erroSenha ? styles.inputErro : null]}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(texto) => {
          setSenha(texto);
          if (erroSenha) setErroSenha("");
        }}
      />
      {erroSenha ? <Text style={styles.erroText}>{erroSenha}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={validaAoEntrar}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.linkText}>Voltar para Home</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 4,
    fontSize: 16,
  },
  inputErro: {
    borderColor: "#cc0000",
  },
  erroText: {
    color: "#cc0000",
    fontSize: 13,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#003f7a",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    color: "#003f7a",
    fontSize: 16,
  },
});
