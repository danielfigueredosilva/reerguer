import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import SelectDropdown from 'react-native-select-dropdown';
import { useState } from 'react';

export default function Pedir_ajuda() {
  const [ pedido, setPedido ] = useState("");

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        {pedido ? `Pedido selecionado: ${pedido}` : "Nenhum pedido selecionado"}
      </Text>

      <SelectDropdown
        data={["Alimentos", "Roupas", "Abrigo"]}
        onSelect={(item) => setPedido(item)}
        defaultButtonText="Pedidos"
        buttonStyle={{ width: 200, borderRadius: 8 }}
      />

      <Link href="./dashboard/" style={{ marginTop: 30 }}>
        <Text style={{ color: 'blue' }}>Voltar para tela inicial</Text>
      </Link>
    </View>
  );
}
