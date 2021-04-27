import { Story, Meta } from '@storybook/react';

import Icon, { IconProps } from './Icon';

export default {
  title: 'Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => (
  <Icon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'home-outline',
};
