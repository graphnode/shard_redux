import { Story, Meta } from '@storybook/react';

import TopBar, { TopBarProps } from './TopBar';

export default {
  title: 'TopBar',
  component: TopBar,
} as Meta;

const Template: Story<TopBarProps> = (args) => (
  <TopBar {...args} />
);

export const Default = Template.bind({});
Default.args = {

};
