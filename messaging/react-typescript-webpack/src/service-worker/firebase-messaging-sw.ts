// Tell TypeScript that we are in Service Worker context, which is a specific
// type of Web Worker that has extra APIs available.
// https://github.com/Microsoft/TypeScript/issues/14877
declare var self: ServiceWorkerGlobalScope;

import firebase from 'firebase/app';
import 'firebase/messaging';
import { firebaseConfig } from '../common/configuration';

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
