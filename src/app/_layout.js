// Importa o Stack Navigator do expo-router
import { Stack } from 'expo-router';

// Este componente define o layout principal (fora das tabs)
export default function Layout() {
  return (
    <Stack
      // Opções aplicadas a todas as telas dentro deste Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121212', // Cor de fundo do header
        },
        headerTintColor: '#fff', // Cor do texto e ícones do header
        headerBackVisible: false, // Oculta o botão de voltar (mais elegante que headerLeft: () => null)
      }}
    >
      {/* Tela inicial: Login (index.js) */}
      <Stack.Screen name="index" options={{ title: 'Login' }} />

      {/* Telas avulsas (caso sejam acessadas diretamente sem abas) */}
      <Stack.Screen name="dashboard" options={{ title: 'Dashboard' }} />

      <Stack.Screen name="pedir_ajuda" options={{ title: 'Pedir Ajuda'}}/>

      <Stack.Screen name="oferecer_ajuda" options={{ title: 'Oferecer Ajuda'}}/>
    
      {/* Área de navegação com abas (Tabs). O header será controlado lá dentro. */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false, // Oculta o header aqui porque cada aba tem sua própria aparência
        }}
      />
    </Stack>
  );
}