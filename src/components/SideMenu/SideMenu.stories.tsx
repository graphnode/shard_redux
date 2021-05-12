import { Story, Meta } from '@storybook/react';

import { MemoryRouter as Router } from 'react-router-dom';

import SideMenu from './SideMenu';

export default {
  title: 'SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(Story) => <Router><Story/></Router>],
} as Meta;

const Template: Story = (args) => <SideMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
