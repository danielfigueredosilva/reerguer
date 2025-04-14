import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: 'center',
    marginVertical: 8,
  },
  cardText: {
    fontSize: 18,
    color: '#007bff',
    fontWeight: '500',
  },
});
