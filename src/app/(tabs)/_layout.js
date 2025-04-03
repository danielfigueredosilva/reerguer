import { Tabs } from 'expo-router';
import { MaterialIcons } from 'react-native-vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* Painel */}
      <Tabs.Screen
        name="dashboard/index"
        options={{
          title: 'Painel',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          ),
        }}
      />

      {/* Oferecer Ajuda */}
      <Tabs.Screen
        name="oferecer_ajuda/index"
        options={{
          title: 'Ajuda',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="volunteer-activism" size={size} color={color} />
          ),
        }}
      />

      {/* Pedir Ajuda */}
      <Tabs.Screen
        name="pedir_ajuda/index"
        options={{
          title: 'Pedir',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="help" size={size} color={color} />
          ),
        }}
      />

      {/* Abrigos */}
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
