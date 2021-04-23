import React from 'react';
import { Story, Meta } from '@storybook/react';

import Draggable, { DraggableProps } from './Draggable';

export default {
  title: 'Draggable',
  component: Draggable,
} as Meta;

const Template: Story<DraggableProps> = (args) => <Draggable {...args} />;

export const Default = Template.bind({});
Default.args = {};
