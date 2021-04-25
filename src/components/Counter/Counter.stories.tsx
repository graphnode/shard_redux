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
  type: 'Mass',
  value: '26,324 t',
  change: '+ 100 t',
};
