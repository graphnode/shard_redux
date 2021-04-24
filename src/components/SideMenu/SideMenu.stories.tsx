import { Story, Meta } from '@storybook/react';

import { MemoryRouter as Router } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../assets/home-outline.svg';
import { ReactComponent as DatabaseIcon } from '../../assets/database-outline.svg';
import { ReactComponent as ChatIcon } from '../../assets/chat-outline.svg';

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
    { title: 'Home', icon: HomeIcon, path: '/' },
    { title: 'Database', icon: DatabaseIcon, path: '/database' },
    { title: 'Chat', icon: ChatIcon, path: '/chat' },
  ],
};
