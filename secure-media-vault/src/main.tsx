import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './app/store.ts';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

