import { Stack } from 'expo-router'
 
export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#121212" // backgraund header

        },

        headerTintColor: "#FFF",// texto do header
        headerLeft: () => null, //remove a seta de voltar de todas as telas
      }}
    >
      <Stack.Screen name="index" options={{ title: "Login"}}/>
      {/* <Stack.Screen name="dashboard" options={{ title: "Dashboard" }}/>
      <Stack.Screen name="oferecer_ajuda" options={{ title: "Oferecer Ajuda" }}/>
      <Stack.Screen name="pedir_ajuda" options={{ title: "Pedir Ajuda" }}/>
      <Stack.Screen name="brigos" options={{ title: "Abrigos" }} /> */}
      <Stack.Screen name="(tabs)"  options={{ headerShown: false, headerLeft:() => null, }}/>
    </Stack>
  )
}