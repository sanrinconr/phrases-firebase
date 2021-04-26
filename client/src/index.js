import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'firebase/firestore';
import {FirebaseAppProvider} from "reactfire"
import {data} from './firebaseConfig';
ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={ data }>
    <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
