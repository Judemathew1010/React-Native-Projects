import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Item {
  id: string;
  title: string;
}

const DATA: Item[] = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
];

export default function App() {
  const [items, setItems] = useState<Item[]>(DATA);

  const handleItemClick = (itemId: string) => {
    // Handle the click event for each item here
    console.log(`Item ${itemId} clicked`);
  };

  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity onPress={() => handleItemClick(item.id)}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0ff',
  },
  item: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16,
    borderTopEndRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#0066ff',
    padding: 40,
    marginVertical: 7,
  },
  title: {
    fontSize: 32,
    color: '#ffffff',
  },
});
