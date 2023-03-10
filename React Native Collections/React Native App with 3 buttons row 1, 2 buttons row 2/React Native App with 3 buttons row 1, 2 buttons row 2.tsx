import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';

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
    let youtubeLink = '';
    switch (itemId) {
      case '1':
        youtubeLink = 'https://www.youtube.com/watch?v=swXmY-7eTRo';
        break;
      case '2':
        youtubeLink = 'https://www.youtube.com/watch?v=rKCL_MEXqJo';
        break;
      case '3':
        youtubeLink = 'https://www.youtube.com/watch?v=NUl-a3GZznQ';
        break;
      case '4':
        youtubeLink = 'https://www.youtube.com/watch?v=bsFXgfbj8Bc';
        break;
      case '5':
        youtubeLink = 'https://www.youtube.com/watch?v=UNbyT7wPwk4';
        break;
      default:
        break;
    }
    // Redirect to the appropriate YouTube link
    Linking.openURL(youtubeLink);
  };

  const renderRow = (rowItems: Item[]) => (
    <View style={styles.row}>
      {rowItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handleItemClick(item.id)}
          style={styles.item}
        >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const rows: Item[][] = [
    [DATA[0], DATA[1], DATA[2]], [DATA[3], DATA[4]],
  ];

  return (
    <View style={styles.container}>
      {rows.map((row, index) => (
        <View key={index}>{renderRow(row)}</View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0ff',
    
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    
    width: 120,
    height: 50,
    marginHorizontal: 2,
    marginBottom:2,
    borderRadius: 10,
    
    backgroundColor: '#0066ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#ffffff',
  },
});
