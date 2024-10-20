import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, Image, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'Alice',
  amount: '0'
}, {
  id: '2',
  name: 'Bob',
  amount: '0'
}, {
  id: '3',
  name: 'Charlie',
  amount: '0'
}];

const ExpenseSplitter = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Expense Splitter</Text>
      <TextInput style={styles.input} placeholder="Enter total amount" keyboardType="numeric" />
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.listItem}>
            <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
            <TextInput style={styles.amountInput} placeholder="0" keyboardType="numeric" value={item.amount} />
          </View>} />
      <Button title="Split Expense" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  name: {
    flex: 1,
    fontSize: 18
  },
  amountInput: {
    width: 80,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10
  }
});
export default ExpenseSplitter;