import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AuthMethods, 
         AuthProviders,
         FIREBASE_PROVIDERS, 
         firebaseAuthConfig,
         defaultFirebase } from 'angularfire2';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDER } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTER_PROVIDER,
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyDiNHqJA8aBurA4huOeayaPxqAsK3iP-ys",
    authDomain: "angfire2-chat.firebaseapp.com",
    databaseURL: "https://angfire2-chat.firebaseio.com",
    storageBucket: "angfire2-chat.appspot.com",
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect,
    remember: 'default',
    scope: ['https://www.googleapis.com/auth/plus.login']
  })
]);;
