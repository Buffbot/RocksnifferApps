import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Notification from '../components/notification';

storiesOf('Notification', module)
  .add('default', () => (
    <Notification
      bandName="Sufjan Stevens"
      albumTitle="Illinoise"
      songTitle="Jacksonville"
      imageUrl="https://f4.bcbits.com/img/a1535970238_10.jpg"
      percent={30}
      />)
  );
