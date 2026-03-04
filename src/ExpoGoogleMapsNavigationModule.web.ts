import { registerWebModule, NativeModule } from 'expo';

import { ExpoGoogleMapsNavigationModuleEvents } from './ExpoGoogleMapsNavigation.types';

class ExpoGoogleMapsNavigationModule extends NativeModule<ExpoGoogleMapsNavigationModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoGoogleMapsNavigationModule, 'ExpoGoogleMapsNavigationModule');
