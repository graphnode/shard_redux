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
    { name: 'Cursor', description: 'Description 1', price: '65,500', count: 60 },
    { name: 'Grandma', description: 'Description 2', price: '65,500', count: 60 },
    { name: 'Farm', description: 'Description 3', price: '65,500', count: 5 },
    { name: 'Mine', description: 'Description 4', price: '65,500', count: 60 },
    { name: 'Factory', description: 'Description 5', price: '65,500', count: 0 },
    { name: 'Bank', description: 'Description 6', price: '65,500', count: 1523324 },
    { name: 'Temple', description: 'Description 7', price: '65,500', count: 60 },
  ],
};
