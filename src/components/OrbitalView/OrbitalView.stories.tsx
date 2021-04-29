import { Story, Meta } from '@storybook/react';

import OrbitalView, { OrbitalViewProps } from './OrbitalView';

export default {
  title: 'OrbitalView',
  component: OrbitalView,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<OrbitalViewProps> = (args) => (
  <OrbitalView {...args} />
);

export const Default = Template.bind({});
Default.args = {

};
