import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { DashboardCard } from '../../../components/DashBoardCard'; // importa como componente nomeado
import { Ionicons } from '@expo/vector-icons'; // Para adicionar um ícone ao header

export default function Dashboard() {
  return (
    <View style={styles.container}>
      
      <View style={styles.notification}>
        <Text style={styles.notificationText}>
          Alerta: Risco de enchente em Chernobyll
        </Text>
      </View>

      <View style={styles.headerContainer}>
        
        <Text style={styles.header}>SOS Chuvas ⚠️</Text>
      </View>

      <Text style={styles.subtext}>O que você deseja fazer?</Text>

      <ScrollView contentContainerStyle={styles.cardContainer}>
        <DashboardCard title="🤝 Oferecer Ajuda" link="/oferecer_ajuda" />
        <DashboardCard title="❤️ Pedir Ajuda" link="/pedir_ajuda" />
        <DashboardCard title="🏠 Abrigos" link="/abrigos" />
        <DashboardCard title="🔒 Voltar para login" link="/" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  notification: {
    backgroundColor: '#FF4500',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 10,
   
    
  },
  notificationText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  header: {
    fontSize: 34, 
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginLeft: 10, 
    textShadowColor: '#999', 
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  subtext: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    paddingBottom: 40,
    gap: 16,
  },
});
