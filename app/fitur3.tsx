import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Stack } from 'expo-router';
import { Button, Title, Card, Text, TextInput, List } from 'react-native-paper';

export default function Fitur3() {
  const [type, setType] = React.useState<'income' | 'expense'>('income');
  const [amount, setAmount] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [items, setItems] = React.useState<{type: 'income' | 'expense', amount: number, desc: string}[]>([]);

  const handleAdd = () => {
    if (!amount) return;
    setItems([
      ...items,
      { type, amount: parseFloat(amount), desc }
    ]);
    setAmount('');
    setDesc('');
  };

  const total = items.reduce((sum, item) => item.type === 'income' ? sum + item.amount : sum - item.amount, 0);

  return (
    <>
      <Stack.Screen options={{ title: 'Money Tracker' }} />
      <View style={styles.container}>
        <Title style={styles.title}>Money Tracker</Title>
        <View style={styles.inputRow}>
          <Button mode={type === 'income' ? 'contained' : 'outlined'} onPress={() => setType('income')} style={styles.typeButton}>Pemasukan</Button>
          <Button mode={type === 'expense' ? 'contained' : 'outlined'} onPress={() => setType('expense')} style={styles.typeButton}>Pengeluaran</Button>
        </View>
        <TextInput
          label="Nominal"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          label="Deskripsi (opsional)"
          value={desc}
          onChangeText={setDesc}
          style={styles.input}
        />
        <Button mode="contained" onPress={handleAdd} style={styles.addButton} disabled={!amount}>
          Tambah
        </Button>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.balanceLabel}>Total Saldo</Text>
            <Text style={styles.balanceValue}>Rp {total.toLocaleString('id-ID')}</Text>
          </Card.Content>
        </Card>
        <FlatList
          data={items}
          keyExtractor={(_, idx) => idx.toString()}
          style={styles.list}
          renderItem={({item}) => (
            <List.Item
              title={item.desc || (item.type === 'income' ? 'Pemasukan' : 'Pengeluaran')}
              description={`Rp ${item.amount.toLocaleString('id-ID')}`}
              left={props => <List.Icon {...props} icon={item.type === 'income' ? 'arrow-down-bold' : 'arrow-up-bold'} color={item.type === 'income' ? '#388e3c' : '#d32f2f'} />}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  typeButton: {
    marginHorizontal: 8,
  },
  input: {
    marginBottom: 8,
  },
  addButton: {
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
    textAlign: 'center',
  },
  balanceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
}); 