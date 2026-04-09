// Rafael Rinaldi da Matta e Cassio

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const CartaoPerfil = ({ nome, profissao, cidade, email }) => {
  const handleEnviarEmail = () => {
    Alert.alert(
      'E-mail Enviado',
      `E-mail enviado para: ${email}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.profissao}>{profissao}</Text>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text style={styles.email}>{email}</Text>
      
      <TouchableOpacity style={styles.botao} onPress={handleEnviarEmail}>
        <Text style={styles.textoBotao}>ENVIAR E-MAIL</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    minWidth: 300,
    maxWidth: '90%',
  },
  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
    textAlign: 'center',
  },
  profissao: {
    fontSize: 20,
    color: '#666666',
    marginBottom: 4,
    fontWeight: '600',
  },
  cidade: {
    fontSize: 18,
    color: '#888888',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 24,
    fontWeight: '500',
  },
  botao: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
    minWidth: 200,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CartaoPerfil;
