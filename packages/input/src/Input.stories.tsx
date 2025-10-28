import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from '../dist/index.mjs';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    sizeDs: 'm',
    label: 'Email',
    placeholder: 'you@example.com',
    caption: '',
    icon: <SearchOutlined />,
    iconPosition: 'none',
    error: false,
    width: 360, // по умолчанию ширина в px
  },
  argTypes: {
    sizeDs: { control: 'inline-radio', options: ['l', 'm', 's'] },
    iconPosition: { control: 'inline-radio', options: ['none', 'left', 'right', 'both'] },
    error: { control: 'boolean' },
    // width можно менять из Controls; число трактуем как px
    width: {
      control: { type: 'number', min: 160, max: 800, step: 10 },
      description: 'Ширина контейнера. Число = px. Можно передать строку в коде (например "100%").',
    },
    icon: { table: { disable: true } },
  },
  parameters: { controls: { expanded: true } },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="rl-space-y-4">
      <Input sizeDs="l" label="Large" placeholder="Placeholder" width={480} />
      <Input sizeDs="m" label="Medium" placeholder="Placeholder" width={360} />
      <Input sizeDs="s" label="Small" placeholder="Placeholder" width={280} />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="rl-space-y-4">
      <Input label="Left icon"  icon={<SearchOutlined />} iconPosition="left"  placeholder="Search..." width={360} />
      <Input label="Right icon" icon={<SearchOutlined />} iconPosition="right" placeholder="Search..." width={360} />
      <Input label="Both"       icon={<SearchOutlined />} iconPosition="both"  placeholder="Search..." width={360} />
    </div>
  ),
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    caption: 'Invalid email',
    error: true,
    width: 360,
  },
};

export const WidthPlayground: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type…',
    icon: <SearchOutlined />,
    iconPosition: 'right',
    width: 480,
  },
};
