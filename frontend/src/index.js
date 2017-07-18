import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import { initStore } from './store/Store';

// components
import App from './components/App/App';

// APIs
import { setPreferences, getPreferences } from './API/preferenceAPI';
import { setUsers } from './API/userAPI';
import { setRooms, getRooms } from './API/roomAPI';
import { setFetching, getFetching } from './API/fetchingAPI';
import { setRender } from './API/renderAPI';

// Actions
import { getUser } from './actions/userActions';

// Import static files
import './index.css';


const store = initStore();

store.subscribe( () => {
  // This stuff happens everytime to store is updated
  const state = store.getState();
  setPreferences(state.preferences);
  setRooms(state.rooms);
  setUsers(state.user);
  setFetching(state.isFetching);
  setRender(state.renderWait)
})

// This dispatcher is for the flow of storing user login status.
store.dispatch(getUser())


ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>,
                document.getElementById('root'));
registerServiceWorker();
