import React from 'react';
import { View, StyleSheet } from 'react-native';
import CartaoPerfil from './components/CartaoPerfil';

export default function App() {
  return (
    <View style={styles.container}>
      <CartaoPerfil
        nome="Rafael Rinaldi da Matta "
        profissao="CLT"
        cidade="Campinas, SP"
        email="rafaelrf12@email.com"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});