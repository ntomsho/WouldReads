import ReactDOM from 'react-dom';
<<<<<<< HEAD
import * as SessionApiUtil from './util/session_api_util';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';
=======
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';
import * as ShelfApiUtil from './util/shelf_api_util';
>>>>>>> f9f5f011a7598d2e07cddb7ad02e6062c60be57a

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

<<<<<<< HEAD
  window.signup = SessionApiUtil.signup;
  window.signin = SessionApiUtil.signin;
  window.logout = SessionApiUtil.logout;
=======
  window.fetchShelves = ShelfApiUtil.fetchShelves;
>>>>>>> f9f5f011a7598d2e07cddb7ad02e6062c60be57a

  ReactDOM.render(<Root store ={store}/>, root);
});