import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoContainerList from '../components/todoContainerList';
import TodoContainerAddItemForm from '../components/todoContainerAddItemForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 30,
  },
});

export default () => (
  <View style={styles.container}>
    <TodoContainerList />
    <TodoContainerAddItemForm />
  </View>
);
