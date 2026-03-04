import * as React from 'react';

import { ExpoGoogleMapsNavigationViewProps } from './ExpoGoogleMapsNavigation.types';

export default function ExpoGoogleMapsNavigationView(props: ExpoGoogleMapsNavigationViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
