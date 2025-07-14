import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Button, Title, Card, Text, IconButton } from 'react-native-paper';

export default function Fitur2() {
  // Dummy state untuk hasil deteksi
  const [hargaBarang, setHargaBarang] = React.useState<number | null>(null);
  const [jumlahUang, setJumlahUang] = React.useState<number | null>(null);
  const [showResult, setShowResult] = React.useState(false);

  // Fungsi dummy deteksi harga barang
  const handleDeteksiHarga = () => {
    setHargaBarang(35000); // Contoh hasil deteksi
  };

  // Fungsi dummy deteksi uang
  const handleDeteksiUang = () => {
    setJumlahUang(50000); // Contoh hasil deteksi
  };

  // Fungsi untuk menampilkan hasil kembalian
  const handleHitungKembalian = () => {
    setShowResult(true);
  };

  const kembalian =
    hargaBarang !== null && jumlahUang !== null ? jumlahUang - hargaBarang : null;

  return (
    <>
      <Stack.Screen options={{ title: 'Deteksi Harga & Uang' }} />
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Title style={styles.title}>Deteksi Harga Barang & Uang</Title>
            <IconButton icon="camera" size={36} style={styles.cameraIcon} />
            <Button
              mode="contained"
              style={styles.button}
              onPress={handleDeteksiHarga}
              disabled={hargaBarang !== null}
            >
              Deteksi Harga Barang
            </Button>
            {hargaBarang !== null && (
              <Text style={styles.resultText}>Harga Barang: Rp {hargaBarang.toLocaleString()}</Text>
            )}
            <IconButton icon="camera" size={36} style={styles.cameraIcon} />
            <Button
              mode="contained"
              style={styles.button}
              onPress={handleDeteksiUang}
              disabled={jumlahUang !== null}
            >
              Deteksi Uang
            </Button>
            {jumlahUang !== null && (
              <Text style={styles.resultText}>Jumlah Uang: Rp {jumlahUang.toLocaleString()}</Text>
            )}
            {hargaBarang !== null && jumlahUang !== null && !showResult && (
              <Button
                mode="contained"
                style={styles.button}
                onPress={handleHitungKembalian}
              >
                Hitung Kembalian
              </Button>
            )}
            {showResult && kembalian !== null && (
              <View style={styles.resultBox}>
                <Text style={styles.resultLabel}>Kembalian:</Text>
                <Title style={styles.resultNominal}>Rp {kembalian.toLocaleString()}</Title>
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
    marginBottom: 0,
    marginTop: 0,
  },
  button: {
    width: 200,
    marginBottom: 16,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
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