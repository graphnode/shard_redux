import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ReactComponent as HomeIcon } from '../../assets/home-outline.svg';
import { ReactComponent as DatabaseIcon } from '../../assets/database-outline.svg';
import { ReactComponent as ChatIcon } from '../../assets/chat-outline.svg';

import SideMenu, { SideMenuProps } from './SideMenu';

export default {
  title: 'SideMenu',
  component: SideMenu,
} as Meta;

const Template: Story<SideMenuProps> = (args) => <SideMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { icon: HomeIcon, onActivate: action('onActivate') },
    { icon: DatabaseIcon, onActivate: action('onActivate') },
    { icon: ChatIcon, onActivate: action('onActivate') },
  ],
};
