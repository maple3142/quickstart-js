import firebase from 'firebase/app';
import 'firebase/messaging';
import React from 'react';
import { render } from 'react-dom';
import { firebaseConfig, vapidKey } from '../common/configuration';
import { App } from './components/app';

firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();
messaging.usePublicVapidKey(vapidKey);

const root = document.createElement('div');
document.body.appendChild(root);
render(<App messaging={messaging} />, root);
