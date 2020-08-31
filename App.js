import React from 'react';
import MainScreen from './screens/MainScreen';
import {createStore} from 'redux';
import Reducer from './store/reducers';
import {Provider} from 'react-redux';

const store = createStore(Reducer);

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
