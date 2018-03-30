import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './config/routes';
import getRootReducer from './config/getRootReducer';

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware("root", state => state.nav);
const addListener = createReduxBoundAddListener("root");

const AppNavigator = StackNavigator(routes);
class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })} />
    );
  }
}

const navReducer = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

const store = createStore(
  getRootReducer(navReducer),
  applyMiddleware(middleware),
);


const mapStateToProps = (state) => ({ nav: state.nav });
const AppWithNavigationState = connect(mapStateToProps)(App);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Root;
