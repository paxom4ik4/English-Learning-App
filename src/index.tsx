import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';

import App from 'components/App';
import store from 'store';

const Index: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
