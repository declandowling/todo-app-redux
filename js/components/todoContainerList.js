import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import TodoContainerItem from './todoContainerItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 50,
  },
});

const TodoContainerList = props => (
  <View style={styles.container}>
    <FlatList
      data={props.state.containers}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TodoContainerItem
          name={item.name}
          color={item.color}
          completed={item.items.filter(x => x.done).length}
          total={item.items.length}
        />
      )}
    />
  </View>
);

TodoContainerList.propTypes = {
  state: PropTypes.shape({
    containers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({ state: state.todo });
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainerList);
