import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Switch } from '../src/Switch';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

const meta: Meta<typeof Switch> = {
  title: 'UIKit/Switch',
  component: Switch,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: () => (
    <div className="rl-space-y-6">
      <div className="rl-flex rl-gap-4 rl-flex-wrap rl-items-center">
        <Switch defaultChecked />
        <Switch />
        <Switch disabled defaultChecked />
      </div>

      <div className="rl-flex rl-gap-4 rl-flex-wrap rl-items-center">
        <Switch checkedIcon={<SunOutlined />} uncheckedIcon={<MoonOutlined />} defaultChecked />
        <Switch checkedIcon={<SunOutlined />} uncheckedIcon={<MoonOutlined />} />
      </div>

      <div className="rl-space-y-2">
        <div className="rl-text-sm rl-text-gray-d">Ширина</div>
        <div className="rl-flex rl-gap-4 rl-flex-wrap rl-items-center">
          <Switch width={72} defaultChecked />      {/* узкий */}
          <Switch width={96} />                      {/* базовый */}
          <Switch width="140px" defaultChecked />    {/* строкой */}
          <div className="rl-w-[360px] rl-border rl-border-gray-c rl-rounded-md rl-p-3 rl-bg-white">
            <Switch fullWidth defaultChecked />      {/* 100% контейнера */}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    defaultChecked: true,
    fullWidth: false,
    width: 96,
    onBg: 'var(--rl-blue-a)',
    offBg: 'var(--rl-gray-d)',
    disabledBg: 'var(--rl-gray-soft)',
  },
  argTypes: {
    width: { control: 'text' },     // число или 'NNNpx'
    fullWidth: { control: 'boolean' },
    onBg: { control: 'text' },
    offBg: { control: 'text' },
    disabledBg: { control: 'text' },
  },
};
