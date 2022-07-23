import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PackagesReact } from './PackagesReact';

export default {
  component: PackagesReact,
  title: 'PackagesReact',
} as ComponentMeta<typeof PackagesReact>;

const Template: ComponentStory<typeof PackagesReact> = (args) => (
  <PackagesReact {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
