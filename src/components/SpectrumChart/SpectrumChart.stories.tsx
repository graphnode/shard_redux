/* eslint-disable max-len */

import { Story, Meta } from '@storybook/react';

import SpectrumChart, { SpectrumChartProps } from './SpectrumChart';

export default {
  title: 'SpectrumChart',
  component: SpectrumChart,
} as Meta;

const Template: Story<SpectrumChartProps> = (args) => (
  <SpectrumChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  defaultDescription: 'Nothing here',
  points: [
    { position: 10, strength: 20, color: 'red', description: <><h1 style={{ color: 'red' }}>Big Boss</h1><p>High HP enemy. Avoid!</p></> },
    { position: 25, strength: 5, color: 'red', description: <><h1 style={{ color: 'red' }}>Small Enemy</h1><p>Cannon fodder.</p></> },
    { position: 30, strength: 5, color: 'red', description: <><h1 style={{ color: 'red' }}>Small Enemy</h1><p>Cannon fodder.</p></> },
    { position: 80, strength: 10, color: 'blue', description: <><h1 style={{ color: 'blue' }}>You</h1></> },
  ],
};
