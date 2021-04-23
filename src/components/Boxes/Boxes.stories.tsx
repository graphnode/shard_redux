import React from 'react';
import { Story, Meta } from '@storybook/react';

import Boxes, { BoxesProps } from './Boxes';

export default {
  title: 'Boxes',
  component: Boxes,
} as Meta;

const Template: Story<BoxesProps> = (args) => <Boxes {...args} />;

export const Default = Template.bind({});
Default.args = {};
