import React from 'react';

import { Heading } from '../src';

export default {
  title: 'Example/Button',
  component: Heading,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Heading {...args}>dev12</Heading>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  children: 'dev12'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  children: 'dev12',
  element: 'h1'
};

export const Large = Template.bind({});
Large.args = {
  size: 'h8',
  label: 'Button',
  children: 'dev12',
  element: 'h8'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  children: 'dev12'
};
