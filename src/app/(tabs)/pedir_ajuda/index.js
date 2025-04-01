import { View, Text } from 'react-native';
import { Link } from 'expo-router';
 
export default function Pedir_ajuda() {
  return (
    <View style={{ flex: 1, alignItems:'center',justifyContent:'center'}}>
      <Text>Tela pedir ajuda</Text>

      <Link href="./dashboard/" style={{ margin: 10, color:'blue' }}>
        <Text>Voltar para tela inicial</Text>
      </Link>
         
    </View>
  );
}