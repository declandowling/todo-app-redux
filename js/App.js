import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './config/routes';
import getRootReducer from './config/getRootReducer';

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);
const addListener = createReduxBoundAddListener('root');

const AppNavigator = StackNavigator(routes);

const App = props => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
      addListener,
    })}
  />
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({}).isRequired,
};

const navReducer = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

const store = createStore(
  getRootReducer(navReducer),
  applyMiddleware(middleware),
);

const mapStateToProps = state => ({ nav: state.nav });
const AppWithNavigationState = connect(mapStateToProps)(App);

export default () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);
