// Importa o componente Tabs para criar uma navegação em abas (barra inferior)
import { Tabs } from 'expo-router';
// Importa os ícones do Material Icons
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Oculta o cabeçalho em todas as abas
        tabBarActiveTintColor: '#1E90FF', // Cor do ícone ativo
        tabBarInactiveTintColor: '#aaa', // Cor do ícone inativo
        tabBarStyle: {
          backgroundColor: '#121212', // Cor de fundo da barra de abas
          borderTopColor: '#333', // Borda superior da tab bar
        },
        tabBarLabelStyle: {
          fontSize: 12, // Tamanho do texto abaixo dos ícones
        },
      }}
    >
      {/* Aba: Painel principal */}
      <Tabs.Screen
        name="dashboard/index" // Caminho do arquivo: app/(tabs)/dashboard/index.js
        options={{
          title: 'Painel', // Título mostrado na tab
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),
        }}
      />

      {/* Aba: Oferecer Ajuda */}
      <Tabs.Screen
        name="oferecer_ajuda/index"
        options={{
          title: 'Ajuda',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="volunteer-activism" size={size} color={color} />
          ),
        }}
      />

      {/* Aba: Pedir Ajuda */}
      <Tabs.Screen
        name="pedir_ajuda/index"
        options={{
          title: 'Pedir',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="help-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Aba: Abrigos */}
      <Tabs.Screen
        name="abrigos/index"
        options={{
          title: 'Abrigos',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}