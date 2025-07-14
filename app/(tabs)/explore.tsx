import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Explore React Native</Text>
        <Text style={styles.description}>
          React Native memungkinkan Anda membuat aplikasi mobile menggunakan JavaScript dan React.
        </Text>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Fitur Utama:</Text>
          <Text style={styles.infoText}>• Cross-platform (iOS & Android)</Text>
          <Text style={styles.infoText}>• Hot Reload untuk development yang cepat</Text>
          <Text style={styles.infoText}>• Menggunakan komponen native</Text>
          <Text style={styles.infoText}>• Komunitas yang besar dan aktif</Text>
        </View>

        <Text style={styles.footerText}>
          Mulai eksplorasi Anda dengan React Native! 🚀
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 8,
  },
  footerText: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'center',
    fontWeight: '600',
  },
});
