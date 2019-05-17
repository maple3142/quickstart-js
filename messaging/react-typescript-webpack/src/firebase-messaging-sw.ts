import firebase from 'firebase/app';
import 'firebase/messaging';
import { firebaseConfig } from './configuration';

firebase.initializeApp(firebaseConfig);
firebase.messaging();

// TODO: setBackgroundMessageHandler
