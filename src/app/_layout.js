import { Stack } from 'expo-router'
 
export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ title: "Login" }}/>
        <Stack.Screen name="pages/dashboard/index" options={{ title: "Dashboard" }}/>
        <Stack.Screen name="pages/oferecer_ajuda/index" options={{ title: "Oferecer Ajuda" }}/>
        <Stack.Screen name="pages/pedir_ajuda/index" options={{ title: "Pedir Ajuda" }}/>
        <Stack.Screen name="pages/abrigos/index" options={{ title: "Abrigos" }}/>
    </Stack>
  )
}