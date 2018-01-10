import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SongTitle from '../components/album_title';

storiesOf('Song Title', module)
  .add('default', () => (
    <SongTitle title="So Cold" />)
  );
