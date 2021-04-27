import { Story, Meta } from '@storybook/react';

import BuildingList, { BuildingListProps } from './BuildingList';

export default {
  title: 'BuildingList',
  component: BuildingList,
} as Meta;

const Template: Story<BuildingListProps> = (args) => (
  <BuildingList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { name: 'Cursor', price: '65,500', count: 60 },
    { name: 'Grandma', price: '65,500', count: 60 },
    { name: 'Farm', price: '65,500', count: 5 },
    { name: 'Mine', price: '65,500', count: 60 },
    { name: 'Factory', price: '65,500', count: 0 },
    { name: 'Bank', price: '65,500', count: 1523324 },
    { name: 'Temple', price: '65,500', count: 60 },
  ],
};
