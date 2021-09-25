import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loading from "./index";

export default {
  title: 'Github/Loading',
  component: Loading,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
