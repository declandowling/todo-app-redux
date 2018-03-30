import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todoActions';
import * as colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  inputContainer: {
    flex: 0.75,
    marginLeft: 10,
  },
  buttonContainer: {
    flex: 0.25,
    marginLeft: 10,
    marginRight: 10,
  },
  inputStyle: {
    height: 40,
    paddingLeft: 20,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: colors.INPUT_BACKGROUND,
    color: colors.INPUT_TEXT,
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: colors.BUTTON_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  buttonTextStyle: {
    color: colors.BUTTON_TEXT,
    fontSize: 18,
  },
});

const defaultState = {
  containerName: '',
  color: '#ffffff',
};

class TodoContainerAddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.onAddContainerPress = this.onAddContainerPress.bind(this);
  }

  onAddContainerPress() {
    this.props.actions.addTodoContainer(
      this.state.containerName,
      this.state.color,
    );

    this.setState(defaultState);
  }

  render() {
    const addButtonDisabled = !this.state.containerName;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter a name"
            style={styles.inputStyle}
            value={this.state.containerName}
            onChangeText={containerName => this.setState({ containerName })}
          />
          <TextInput
            placeholder="Pick a color"
            style={[styles.inputStyle, { backgroundColor: this.state.color }]}
            value={this.state.color}
            onChangeText={color => this.setState({ color })}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            disabled={addButtonDisabled}
            onPress={this.onAddContainerPress}
          >
            <Text style={styles.buttonTextStyle}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

TodoContainerAddItemForm.propTypes = {
  actions: PropTypes.shape({
    addTodoContainer: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(todoActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainerAddItemForm);
