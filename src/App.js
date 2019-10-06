import React from 'react';

import { Provider } from 'react-redux';
import store from 'lib/redux';

import PureTaskList from 'components/TaskList/TaskList';

function App() {
  return (
    <Provider store={store}>
      <PureTaskList />
    </Provider>
  );
}

export default App;
