import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BandName from '../components/band_name';

storiesOf('Band Name', module)
  .add('default', () => (
    <BandName name="Breaking Benjamin" />)
  );
