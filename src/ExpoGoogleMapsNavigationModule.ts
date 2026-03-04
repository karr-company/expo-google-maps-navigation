import { NativeModule, requireNativeModule } from 'expo';

import { ExpoGoogleMapsNavigationModuleEvents } from './ExpoGoogleMapsNavigation.types';

declare class ExpoGoogleMapsNavigationModule extends NativeModule<ExpoGoogleMapsNavigationModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoGoogleMapsNavigationModule>('ExpoGoogleMapsNavigation');
