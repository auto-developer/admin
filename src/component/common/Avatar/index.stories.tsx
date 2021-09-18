import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './index';

export default {
  title: 'Github/Avatar',
  component: Avatar,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  img: 'https://avatars.githubusercontent.com/u/9197791?s=96&v=4',
  href: '#'
};
