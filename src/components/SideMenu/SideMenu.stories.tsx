import { Story, Meta } from '@storybook/react';

import { MemoryRouter as Router } from 'react-router-dom';

import SideMenu, { SideMenuProps } from './SideMenu';

export default {
  title: 'SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(Story) => <Router><Story/></Router>],
} as Meta;

const Template: Story<SideMenuProps> = (args) => <SideMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { title: 'Home', icon: 'home-outline', path: '/' },
    { title: 'Database', icon: 'database-outline', path: '/database' },
    { title: 'Chat', icon: 'chat-outline', path: '/chat' },
  ],
};
