import { View, Text, StyleSheet, ScrollView, Pressable, Animated } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { DashboardCard } from '../../../components/DashBoardCard';

export default function Dashboard() {
  const [showNotificationText, setShowNotificationText] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: showNotificationText ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [showNotificationText]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Ionicons name="warning" size={30} color="#FF6347" />
        <Text style={styles.header}>SOS Chuvas</Text>
        <Ionicons name="warning" size={30} color="#FF6347" />
      </View>

      {/* Notificação abaixo do header */}
      <View style={styles.notificationWrapper}>
        <Pressable
          onPress={() => setShowNotificationText(!showNotificationText)}
          style={[
            styles.notification,
            showNotificationText && styles.notificationExpanded,
          ]}
        >
          <Ionicons name="warning" size={24} color="white" />
          <Animated.View style={{ opacity: fadeAnim }}>
            {showNotificationText && (
              <Text style={styles.notificationText}>
                Alerta: Risco de enchente em Recife
              </Text>
            )}
          </Animated.View>
        </Pressable>
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
  notificationWrapper: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  notification: {
    backgroundColor: '#FF4500',
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationExpanded: {
    borderRadius: 10,
    paddingRight: 16,
  },
  notificationText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
    maxWidth: 250,
    flexShrink: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  header: {
    marginRight: 10,
    fontSize: 34,
    fontWeight: 'bold',
    color: '#222',
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
