import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  nameContainer: {
    flex: 0.85,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  nameText: {
    fontSize: 18,
  },
  todosLeftColorBlock: {
    flex: 0.15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#000000',
  },
  todosLeftText: {
    fontSize: 11,
  },
});

const TodoContainerItem = ({ name, color, completed, total }) => (
  <View style={styles.container}>
    <View style={styles.nameContainer}>
      <Text style={styles.nameText}>{name}</Text>
    </View>
    <View style={[styles.todosLeftColorBlock, { backgroundColor: color }]}>
      <Text style={styles.todosLeftText}>{completed} / {total}</Text>
    </View>
  </View>
);

TodoContainerItem.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default TodoContainerItem;
