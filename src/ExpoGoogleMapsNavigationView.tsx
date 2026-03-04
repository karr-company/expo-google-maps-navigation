import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoGoogleMapsNavigationViewProps } from './ExpoGoogleMapsNavigation.types';

const NativeView: React.ComponentType<ExpoGoogleMapsNavigationViewProps> =
  requireNativeView('ExpoGoogleMapsNavigation');

export default function ExpoGoogleMapsNavigationView(props: ExpoGoogleMapsNavigationViewProps) {
  return <NativeView {...props} />;
}
