import { View, Text } from 'react-native';
import { Link } from 'expo-router';
 
export default function Dashboard() {
  return (
    <View style={{ flex: 1, alignitems:'center',justifycontent:'center'}}>
      <Text>Dashboard</Text>

      <Link href="../dashboard/index" style={{ margin: 10, color:'blue' }}>
        <Text>Voltar para login</Text>
      </Link>
         
    </View>
  );
}