import React, { useState } from 'react';
import { View, Alert, StyleSheet, Text, Button } from 'react-native';
import DropdownMenu from '../../../components/DropdownMenu';
import { useRouter } from 'expo-router';

export default function Pedir_ajuda() {
  const [tipoNecessidade, setTipoNecessidade] = useState(null);
  const [descricao, setDescricao] = useState('');
  const [pedidos, setPedidos] = useState([]);

  const router = useRouter();

  const tiposDeNecessidade = ["Alimentos", "Roupas", "Abrigo"];

  const handleSubmit = () => {
    if (descricao.trim() === '' || !tipoNecessidade) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    const novoPedido = {
      tipo: tipoNecessidade,
      descricao: descricao,
    };

    setPedidos((prevPedidos) => [...prevPedidos, novoPedido]);
    Alert.alert('Pedido registrado!', `${tipoNecessidade}: ${descricao}`);

    setTipoNecessidade(null);
    setDescricao('');
  };

  const irParaTelaDePedidos = () => {
    router.push({
      pathname: '/oferecer_ajuda',
      params: { pedidos: JSON.stringify(pedidos) },
    });
  };

  return (
    <View style={styles.container}>
      <DropdownMenu
        label="Selecione o tipo de necessidade"
        options={tiposDeNecessidade}
        selectedValue={tipoNecessidade}
        onSelect={setTipoNecessidade}
        descricao={descricao}
        onDescricaoChange={setDescricao}
        onSubmit={handleSubmit}
      />

      {pedidos.map((pedido, index) => (
        <Text key={index}>• {pedido.tipo}: {pedido.descricao}</Text>
      ))}

      <Button title="Ver Pedidos" onPress={irParaTelaDePedidos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
});
