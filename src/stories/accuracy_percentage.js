import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AccuracyPercentage from '../components/accuracy_percentage';

storiesOf('Accuracy Percentage', module)
  .add('default', () => <AccuracyPercentage percent={50} />);
