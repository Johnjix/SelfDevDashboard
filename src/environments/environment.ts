// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    apiKey: 'AIzaSyB3pcEMhdceHnp6rYdZsMt9-RUziJUwmCg',

    authDomain: 'selfdevdashboard.firebaseapp.com',

    projectId: 'selfdevdashboard',

    storageBucket: 'selfdevdashboard.appspot.com',

    messagingSenderId: '733761130662',

    appId: '1:733761130662:web:6f852821685aeb51d62467',

    measurementId: '${config.measurementId}',
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
