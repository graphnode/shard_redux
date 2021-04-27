import { Story, Meta } from '@storybook/react';

import Counter, { CounterProps } from './Counter';

export default {
  title: 'Counter',
  component: Counter,
} as Meta;

const Template: Story<CounterProps> = (args) => (
  <Counter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Mass',
  value: 26324,
  change: 100,
};
