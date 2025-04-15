import React, { useState } from 'react'; 
import { View, Alert, StyleSheet, Text } from 'react-native';
import DropdownMenu from '../../../components/DropdownMenu'; // Componente DropdownMenu

export default function Pedir_ajuda() {
  const [tipoNecessidade, setTipoNecessidade] = useState(null);
  const [descricao, setDescricao] = useState('');


  const tiposDeNecessidade = ["Alimentos", "Roupas", "Abrigo"];
  // Função para lidar com a submissão do formulário
  const handleSubmit = () => {
    
    if (descricao.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    

    // Exemplo de processamento do formulário (você pode enviar os dados para uma API, por exemplo)
    Alert.alert('Dados Enviados', `Tipo: ${tipoNecessidade}\nDescrição: ${descricao}`);

    // limpa os states
    setTipoNecessidade('')
    setDescricao('')
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
