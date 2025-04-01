import { Tabs } from 'expo-router'

export default function TabLayout() {
    return(
        <Tabs>
            <Tabs.Screen name="dashboard/index" options={{ title: "Painel"}} />
            <Tabs.Screen name="oferecer_ajuda/index" options={{ title: "Oferecer Ajuda" }}/>
            <Tabs.Screen name="pedir_ajuda/index" options={{ title: "Pedir Ajuda" }}/>
            <Tabs.Screen name="abrigos/index" options={{ title: "Abrigos" }} />
        </Tabs>
    )
}