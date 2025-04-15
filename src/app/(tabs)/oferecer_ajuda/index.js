import React from 'react';
import { View, FlatList, Text, StyleSheet, Button, Alert} from 'react-native';
import { useLocalSearchParams } from 'expo-router';


export default function Oferecer_ajuda() {
  const { pedidos } = useLocalSearchParams();
  const listaPedidos = pedidos ? JSON.parse(pedidos) : [];

  const handlePress = (item) => {
    Alert.alert("Clicou")
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>• {item.tipo}: {item.descricao}</Text>
      <Button title="acao" onPress={() => handlePress(item)}/>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Oferecer Ajuda</Text>
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 10,
  },
 
});
