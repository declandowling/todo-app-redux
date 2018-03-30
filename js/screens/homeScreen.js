import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default () => (
  <View style={styles.container}>
    <Text style={styles.header}>
      Welcome to ToDo Redux!
    </Text>
    <Text style={styles.instructions}>
      To get started, edit App.js
    </Text>
  </View>
);
