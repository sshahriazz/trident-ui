import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Trident } from './Trident';

export default {
  component: Trident,
  title: 'Trident',
} as ComponentMeta<typeof Trident>;

const Template: ComponentStory<typeof Trident> = (args) => (
  <Trident {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
