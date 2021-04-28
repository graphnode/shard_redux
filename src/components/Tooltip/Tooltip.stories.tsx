import { Story, Meta } from '@storybook/react';

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
  children: <button>Hello World</button>,
};
