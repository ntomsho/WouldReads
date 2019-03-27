import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';

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

  window.signup = SessionApiUtil.signup;
  window.signin = SessionApiUtil.signin;
  window.logout = SessionApiUtil.logout;

  ReactDOM.render(<Root store ={store}/>, root);
});