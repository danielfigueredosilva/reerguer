import { View, Text } from 'react-native';
import { Link } from 'expo-router';
 
export default function Login() {
  return (
    <View style={{ flex: 1, alignitems:'center', justifycontent:'center'}}>
      <Text>Tela inicial</Text>

      <Link href="/dashboard" style={{ margin: 10,color:'blue' }}>
        <Text>Logar</Text>
      </Link>
    </View>
  );
}
// calma calabreso
//socorro