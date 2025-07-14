import * as React from 'react';
import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Button, Title, Card, Text, IconButton } from 'react-native-paper';

export default function Fitur1() {
  // Dummy state untuk hasil deteksi
  const [nominal, setNominal] = React.useState<string | null>(null);

  // Fungsi dummy untuk simulasi deteksi uang
  const handleScan = () => {
    setNominal('Rp 50.000'); // Contoh hasil deteksi
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Deteksi Uang' }} />
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <IconButton icon="camera" size={48} style={styles.cameraIcon} />
            <Text style={styles.infoText}>Arahkan kamera ke uang kertas</Text>
            <Button mode="contained" onPress={handleScan} style={styles.button}>
              Deteksi Uang
            </Button>
            {nominal && (
              <View style={styles.resultBox}>
                <Text style={styles.resultLabel}>Nominal Terdeteksi:</Text>
                <Title style={styles.resultNominal}>{nominal}</Title>
              </View>
            )}
          </Card.Content>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    paddingVertical: 24,
  },
  cardContent: {
    alignItems: 'center',
  },
  cameraIcon: {
    marginBottom: 16,
  },
  infoText: {
    marginBottom: 24,
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    marginBottom: 24,
    width: 200,
  },
  resultBox: {
    marginTop: 16,
    alignItems: 'center',
    backgroundColor: '#f1f3f4',
    borderRadius: 8,
    padding: 16,
    width: 180,
  },
  resultLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  resultNominal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
}); 