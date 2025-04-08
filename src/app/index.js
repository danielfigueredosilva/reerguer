// Importa os componentes que serão usados na interface e funcionalidades do React Native
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// Importa o React e o useState para manipular estado (variáveis controladas)
import React, { useState } from 'react';
// Importa o hook useRouter do expo-router para navegar entre páginas
import { useRouter } from 'expo-router';
import { CustomButton } from '../components/CustomButton';

export default function Login() {
  // Define os estados para armazenar o usuário e a senha digitados
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Instancia o roteador para permitir a navegação programática
  const router = useRouter();

  // Função chamada quando o botão "Entrar" é pressionado
  const handleLogin = () => {
    // Verifica se os campos estão vazios
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    // Verifica se os dados inseridos são iguais ao usuário e senha definidos
    if (username === 'admin' && password === '1234') {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      // Se estiver tudo certo, redireciona o usuário para a tela /dashboard
      router.push('/dashboard');
    } else {
      // Se o usuário ou a senha estiverem incorretos, exibe mensagem de erro
      Alert.alert('Erro', 'Usuário ou senha incorretos.');
    }
  };

  // Retorno da interface do componente
  return (
    <View style={styles.container}>
      {/* Label para o campo de usuário */}
      <Text style={styles.label}>Usuário:</Text>
      
      {/* Campo de input para o nome de usuário */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
        value={username}
        onChangeText={setUsername} // Atualiza o estado username
        autoCapitalize="none" // Evita que a primeira letra seja maiúscula automaticamente
      />

      {/* Label para o campo de senha */}
      <Text style={styles.label}>Senha:</Text>

      {/* Campo de input para a senha */}
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword} // Atualiza o estado password
        secureTextEntry // Esconde os caracteres da senha
      />

      {/* Botão que chama a função de login */}
      <CustomButton title="Entrar" onPress={handleLogin}/>

    </View>
  );
}

// Estilos aplicados aos componentes da interface
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    padding: 20, // Espaçamento interno
    paddingBottom: 300, 
    gap:20,
    justifyContent: 'center', // Centraliza verticalmente
    backgroundColor: '#fff', // Cor de fundo branca
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});