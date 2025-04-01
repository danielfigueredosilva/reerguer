import { View, Text } from 'react-native';
import { Link } from 'expo-router';
 
export default function Login() {
  return (
    <View style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela de logar</Text>

      <Link href="/pages/dashboard/" style={{ margin: 10,color:'blue' }}>
        <Text>Logar</Text>
      </Link>
    </View>
  );
}
