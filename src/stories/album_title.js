import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AlbumTitle from '../components/album_title';

storiesOf('Album Title', module)
  .add('default', () => (
    <AlbumTitle title="We are not alone" />)
  );
