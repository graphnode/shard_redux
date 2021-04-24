import { Story, Meta } from '@storybook/react';

import Draggable, { DraggableProps } from './Draggable';
import DropTarget, { DropTargetProps } from './DropTarget';

export default {
  title: 'Draggable',
  component: Draggable,
} as Meta;

const Template: Story<DraggableProps> = (args) => (
  <Draggable {...args} />
);

export const Default = Template.bind({});
Default.args = {};

const TemplateWithDropTarget: Story<{ drag: DraggableProps; drop: DropTargetProps }> = (args) => (
  <>
    <DropTarget {...args.drop} />
    <Draggable {...args.drag} />
  </>
);

export const WithDropTarget = TemplateWithDropTarget.bind({});
WithDropTarget.args = {
  drag: {
    initialPosition: [200, 200],
  },
  drop: {
    style: { position: 'absolute', left: '400px', top: '200px', width: '5rem', height: '5rem' },
  },
};
