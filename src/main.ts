import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyDiNHqJA8aBurA4huOeayaPxqAsK3iP-ys",
    authDomain: "angfire2-chat.firebaseapp.com",
    databaseURL: "https://angfire2-chat.firebaseio.com",
    storageBucket: "angfire2-chat.appspot.com",
  })
]);;

