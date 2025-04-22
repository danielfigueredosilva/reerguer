import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';


// Dados fictícios dos abrigos
const abrigos = [
  { id: '1', nome: 'Abrigo Dantas Barreto', endereco: 'Rua Visconde silva, 123', distancia: '1.2 km' },
  { id: '2', nome: 'Abrigo Casa amarela esperança', endereco: 'Av General justos, 456', distancia: '2.5 km' },
  { id: '3', nome: 'Casa de Acolhimento Barros lima', endereco: 'Rua Real da torre, 789', distancia: '3.0 km' },
  { id: '4', nome: 'Abrigo Mãos Amigas', endereco: 'Av General polidoro, 101', distancia: '0.8 km' },
];

// Componente de Item da FlatList
const ItemAbrigo = ({ nome, endereco, distancia }) => (
  <View style={styles.item}>
    <Text style={styles.titulo}>{nome}</Text>
    <Text>{endereco}</Text>
    <Text>{`Distância: ${distancia}`}</Text>
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.textoBotao}>Ver Mais</Text>
    </TouchableOpacity>
  </View>
);

export default function AbrigosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Abrigos Próximos</Text>

      <FlatList
        data={abrigos}
        renderItem={({ item }) => (
          <ItemAbrigo
            nome={item.nome}
            endereco={item.endereco}
            distancia={item.distancia}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f0f4f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    paddingTop:15,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '600',
  },
  botao: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
  },
  link: {
    marginTop: 20,
    alignSelf: 'center',
  },
  linkText: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
