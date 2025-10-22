import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from '../src/Select';

const meta: Meta<typeof Select> = {
  title: 'UIKit/Select',
  component: Select,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { label: 'Первый вариант', value: '1' },
  { label: 'Второй вариант', value: '2' },
  { label: 'Третий вариант', value: '3' },
];

export const WidthExamples: Story = {
  render: () => (
    <div className="rl-space-y-6">
      <div className="rl-flex rl-gap-4 rl-flex-wrap rl-items-end">
        <div>
          <div className="rl-text-sm rl-text-gray-d rl-mb-2">auto (по содержимому)</div>
          <Select options={options} placeholder="auto" />
        </div>
        <div>
          <div className="rl-text-sm rl-text-gray-d rl-mb-2">width=240</div>
          <Select options={options} placeholder="240px" width={240} />
        </div>
        <div>
          <div className="rl-text-sm rl-text-gray-d rl-mb-2">width='320px'</div>
          <Select options={options} placeholder="320px" width="320px" />
        </div>
      </div>

      <div className="rl-space-y-2">
        <div className="rl-text-sm rl-text-gray-d">fullWidth (100% контейнера)</div>
        <div className="rl-w-[420px] rl-border rl-border-gray-c rl-rounded-md rl-p-3 rl-bg-white">
          <Select options={options} placeholder="тянусь на всю ширину контейнера" fullWidth />
        </div>
      </div>

      <div className="rl-space-y-2">
        <div className="rl-text-sm rl-text-gray-d">disabled</div>
        <Select options={options} placeholder="Отключено" disabled width={280} />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    options,
    placeholder: 'Выберите...',
    width: 280,
    fullWidth: false,
    disabled: false,
  },
  argTypes: {
    width: { control: 'text' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
