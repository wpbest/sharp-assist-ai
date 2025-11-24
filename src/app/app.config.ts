import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDataConnect, provideDataConnect } from '@angular/fire/data-connect';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'sharp-assist-ai',
        appId: '1:449124250014:web:cf7c7c55835bae365aa68f',
        storageBucket: 'sharp-assist-ai.firebasestorage.app',
        apiKey: 'AIzaSyAvH7hAlZGtIXNq0-LQo3zAetM6o6Iae1Q',
        authDomain: 'sharp-assist-ai.firebaseapp.com',
        messagingSenderId: '449124250014',
        // projectNumber: '449124250014',
        // version: '2',
      })
    ),
    provideAuth(() => getAuth()),
    provideDataConnect(() =>
      getDataConnect({
        connector: 'example',
        location: 'us-west4',
        service: 'sharp-assist-ai',
      })
    ),
    provideFunctions(() => getFunctions()),
  ],
};
