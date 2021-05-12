import { Story, Meta } from '@storybook/react';
import React from 'react';

import Button from '../Button';
import Tooltip, { TooltipProps } from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<React.PropsWithChildren<TooltipProps>> = (args) => (
  <Tooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: <span>This a tooltip</span>,
  children: <span>Hello World</span>,
};
export const DisabledButton = Template.bind({});
DisabledButton.args = {
  content: <span>This a tooltip</span>,
  children: <Button disabled>Hello World</Button>,
};
