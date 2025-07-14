import * as React from 'react';
import { Stack, Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Appbar, Button, Title, Paragraph } from 'react-native-paper';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      {/* <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header> */}
      <View style={styles.container}>
        <Title style={styles.title}>Selamat Datang</Title>
        <Paragraph style={styles.desc}>Pilih fitur yang ingin digunakan:</Paragraph>
        <Link href="/fitur1" asChild>
          <Button mode="contained" style={styles.button} contentStyle={{height: 56}} labelStyle={{fontSize: 18}}>
          Pengenalan Uang
          </Button>
        </Link>
        <Paragraph style={styles.featureDesc}>Deteksi nominal uang menggunakan kamera</Paragraph>
        <Link href="/fitur2" asChild>
          <Button mode="contained" style={styles.button} contentStyle={{height: 56}} labelStyle={{fontSize: 18}}>
          Pengenalan Harga & Kalkulasi Kembalian
          </Button>
        </Link>
        <Paragraph style={styles.featureDesc}>Deteksi harga barang & uang, lalu hitung kembalian</Paragraph>
        <Link href="/fitur3" asChild>
          <Button mode="contained" style={styles.button} contentStyle={{height: 56}} labelStyle={{fontSize: 18}}>
            Pelacakan Bugdet
          </Button>
        </Link>
        <Paragraph style={styles.featureDesc}>000</Paragraph>
        <Link href="/fitur4" asChild>
          <Button mode="contained" style={styles.button} contentStyle={{height: 56}} labelStyle={{fontSize: 18}}>
          Proteksi Harga Tidak Wajar
          </Button>
        </Link>
        <Paragraph style={styles.featureDesc}>Deteksi harga barang menggunakan kamera, cek apakah terlalu mahal</Paragraph>
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
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
  desc: {
    marginBottom: 24,
    textAlign: 'center',
    color: '#666',
  },
  button: {
    width: 250,
    marginBottom: 4,
  },
  featureDesc: {
    marginBottom: 12,
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
    width: 250,
  },
}); 