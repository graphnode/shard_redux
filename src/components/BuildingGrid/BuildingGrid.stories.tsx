import { Story, Meta } from '@storybook/react';

import BuildingGrid, { BuildingGridProps } from './BuildingGrid';
import BuildingGridItem from './BuildingGridItem';

export default {
  title: 'BuildingGrid',
  component: BuildingGrid,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

const Template: Story<BuildingGridProps> = (args) => (
  <BuildingGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <>
    <BuildingGridItem />
  </>,
};
