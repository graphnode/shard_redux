import { Story, Meta } from '@storybook/react';

import Word, { WordProps } from './Word';

import '../App/Fonts.css';

export default {
  title: 'Word',
  component: Word,
} as Meta;

const Template: Story<WordProps> = (args) => (
  <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.5rem', color: '#fff' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis ipsum quis mi bibendum sed vel ante. Sed vitae
    dictum elit. Donec vehicula eros felis, at facilisis diam lacinia vel. In cursus quam ipsum, ultrices vestibulum
    ex <Word {...args} /> malesuada id. Quisque at sem vel mauris ultrices consectetur id eget nisi. Aenean efficitur
    rhoncus velit, id consectetur nunc ullamcorper sit amet. Nulla lobortis posuere tellus nec pellentesque. Vivamus non
    odio at nulla eleifend auctor.
  </p>
);

export const Default = Template.bind({});
Default.args = {
  children: 'destination',
};
