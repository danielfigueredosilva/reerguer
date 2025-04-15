import React from 'react';
import { View, FlatList, Text, StyleSheet,  Alert} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { CustomButton } from '../../../components/CustomButton';

export default function Oferecer_ajuda() {
  const { pedidos } = useLocalSearchParams();
  const listaPedidos = pedidos ? JSON.parse(pedidos) : [];

  const handlePress = (item) => {
    const mensagem = item.tipo == 'Abrigo' 
    ? 'Voluntário Confirmado' 
    : 'Doação Confirmada';
    
    Alert.alert(mensagem);
  }
  
  if (listaPedidos == '' ){
    Alert.alert('Sem pedidos')
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.tipo}: {item.descricao}</Text>
      <CustomButton title="Ajudar" onPress={() => handlePress(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oferecer Ajuda</Text>
      <FlatList
        data={listaPedidos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding:50,
  
    
  },
  itemContainer: {
    marginBottom: 10,
    gap:15,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
 
});
