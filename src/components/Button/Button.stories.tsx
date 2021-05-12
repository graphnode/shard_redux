import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<React.PropsWithChildren<ButtonProps>> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Hello World',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Hello World',
  disabled: true,
};

export const Resized = Template.bind({});
Resized.args = {
  children: 'Hello World',
  style: { width: 200, height: 100 },
};
