import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Button, Title, Card, Text, IconButton } from 'react-native-paper';

export default function Fitur4() {
  // Dummy state untuk hasil deteksi
  const [hargaBarang, setHargaBarang] = React.useState<number | null>(null);
  const [showResult, setShowResult] = React.useState(false);
  const threshold = 100000; // Batas harga mahal

  // Fungsi dummy deteksi harga barang
  const handleDeteksiHarga = () => {
    setHargaBarang(150000); // Contoh hasil deteksi (di atas threshold)
    setShowResult(true);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Deteksi Harga Barang' }} />
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Title style={styles.title}>Deteksi Harga Barang</Title>
            <IconButton icon="camera" size={48} style={styles.cameraIcon} />
            <Button
              mode="contained"
              style={styles.button}
              onPress={handleDeteksiHarga}
              disabled={showResult}
            >
              Deteksi Harga Barang
            </Button>
            {showResult && hargaBarang !== null && (
              <View style={styles.resultBox}>
                <Text style={styles.resultLabel}>Harga Barang Terdeteksi:</Text>
                <Title style={styles.resultNominal}>Rp {hargaBarang.toLocaleString()}</Title>
                {hargaBarang > threshold && (
                  <Text style={styles.warningText}>Harga terlalu mahal</Text>
                )}
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
  title: {
    marginBottom: 24,
    textAlign: 'center',
  },
  cameraIcon: {
    marginBottom: 16,
  },
  button: {
    width: 200,
    marginBottom: 24,
  },
  resultBox: {
    marginTop: 16,
    alignItems: 'center',
    backgroundColor: '#f1f3f4',
    borderRadius: 8,
    padding: 16,
    width: 200,
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
    marginBottom: 8,
  },
  warningText: {
    color: '#d32f2f',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
}); 