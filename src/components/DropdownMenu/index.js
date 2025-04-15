import React, { useState } from 'react'; 
import { View, Text, TouchableOpacity, TextInput, Modal, FlatList, StyleSheet } from 'react-native';

export default function DropdownMenu({ label, options, selectedValue, onSelect, descricao, onDescricaoChange, onSubmit }) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>

      {/* Botão que abre o modal do dropdown */}
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>{selectedValue || label}</Text>
      </TouchableOpacity>

      {/* Modal que será exibido quando o estado 'visible' for true */}
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setVisible(false)}>
          <View style={styles.modalContent}>
            {/* Dropdown para selecionar o tipo de necessidade */}
            <FlatList
                data={options}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                const isSelected = item === selectedValue;
                return (
                    <TouchableOpacity
                    onPress={() => { onSelect(item); }}
                    style={[styles.option, isSelected && styles.selectedOption]}
                    >
                    <Text style={[styles.optionText, isSelected && styles.selectedOptionText]}>
                        {item}
                    </Text>
                    </TouchableOpacity>
                );
                }}
            />

            {/* Campo de descrição curta */}
            <TextInput
              style={styles.input}
              placeholder="Descrição curta"
              value={descricao}
              onChangeText={onDescricaoChange}
            />

            {/* Botão para submeter */} 
            <TouchableOpacity onPress={() => {
                onSubmit();         // Chama a função de envio
                setVisible(false);  // Fecha o modal
              }} style={styles.submitButton}  >
              <Text style={styles.buttonText}>Enviar</Text>
              
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  //Menu dropdown posicao
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 40,
    paddingBottom: 100,
  },
  //estilizacao do menu
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  // opscoes de pedidos 
  option: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  // pedidos textos
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#e0f7e9', // destaque com fundo verde claro
    borderRadius: 8,
  },
  
  selectedOptionText: {
    fontWeight: 'bold',
    color: '#2e7d32', // texto verde escuro
  },
  
});
