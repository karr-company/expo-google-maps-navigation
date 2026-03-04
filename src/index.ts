// Reexport the native module. On web, it will be resolved to ExpoGoogleMapsNavigationModule.web.ts
// and on native platforms to ExpoGoogleMapsNavigationModule.ts
export { default } from './ExpoGoogleMapsNavigationModule';
export { default as ExpoGoogleMapsNavigationView } from './ExpoGoogleMapsNavigationView';
export * from  './ExpoGoogleMapsNavigation.types';
