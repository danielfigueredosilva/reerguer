import { View, Text } from 'react-native';
import { Link } from 'expo-router';
 
export default function Dashboard() {
  return (
    <View style={{ flex: 1, alignItems:'center',justifyContent:'center' }}>
      <Text>Tela inicial</Text>

      <Link href="../" style={{ margin: 10, color:'blue' }}>
        <Text>Voltar para login</Text>
      </Link>

      <Link href="./oferecer_ajuda/" style={{ margin: 10, color:'blue' }}>
        <Text>Tela de oferecer ajuda</Text>
      </Link>
      
      <Link href="./pedir_ajuda/" style={{ margin: 10, color:'blue' }}>
        <Text>Tela de pedir ajuda</Text>
      </Link>
        
      <Link href="./abrigos/" style={{ margin: 10, color:'blue' }}>
        <Text>Tela de abrigos</Text>
      </Link>

    </View>
  );
}