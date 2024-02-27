import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';

const store = configureStore({reducer: rootReducer});
/* let store = createStore(rootReducer)
@deprecated
We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* provide make the redux store available globally to every component */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
//StrictMode is a dev tool used for highlighting problematic code in React
