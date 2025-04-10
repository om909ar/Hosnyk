
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [azkar, setAzkar] = useState('');

  const morningAzkar = `...`;  // Use your morning azkar here
  const eveningAzkar = `...`;  // Use your evening azkar here

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>أذكار المسلم</Text>

      <View style={styles.buttonsWrapper}>
        <TouchableOpacity style={styles.cardButton} onPress={() => setAzkar(morningAzkar)}>
          <Text style={styles.buttonText}>📿 أذكار الصباح</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardButton} onPress={() => setAzkar(eveningAzkar)}>
          <Text style={styles.buttonText}>🌙 أذكار المساء</Text>
        </TouchableOpacity>

        <Text style={styles.azkar}>{azkar}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0b330',
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    marginTop: 40,
    marginBottom: 50,
    fontWeight: 'bold',
    color: '#1A237E',
  },
  buttonsWrapper: {
    width: '100%',
    marginBottom: 24,
  },
  cardButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 30,
    color: '#1A237E',
    fontWeight: 'bold',
  },
  azkar: {
    fontSize: 18,
    textAlign: 'right',
    lineHeight: 28,
    color: '#000',
    writingDirection: 'rtl',
  },
});
