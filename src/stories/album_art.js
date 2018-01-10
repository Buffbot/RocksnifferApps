import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AlbumArt from '../components/album_art';

storiesOf('Album Art', module)
  .add('default', () => (
    <AlbumArt
      imageUrl="http://www.flat-e.com/flate5/wp-content/uploads/cover-960x857.jpg"
      size={300}
      />)
  );
