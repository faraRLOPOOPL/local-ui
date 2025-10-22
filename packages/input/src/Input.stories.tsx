import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from '../src/Input';
import { SearchOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const meta: Meta<typeof Input> = {
  title: 'UIKit/Input',
  component: Input,
  parameters: { layout: 'padded' },
  args: { placeholder: 'Введите текст...' },
};
export default meta;

type Story = StoryObj<typeof Input>;

const variants: Array<{ v: any; label: string }> = [
  { v: 'blue', label: 'Blue' },
  { v: 'red', label: 'Red (Error, tinted bg)' },
  { v: 'green', label: 'Green (Success)' },
];

const sizes: Array<{ name: any; label: string }> = [
  { name: 'sm', label: 'SM' },
  { name: 'md', label: 'MD' },
  { name: 'lg', label: 'LG' },
];

export const AllVariants: Story = {
  render: () => {
    return (
      <div className="rl-space-y-8">
        {variants.map(({ v, label }) => (
          <div key={v}>
            <div className="rl-mb-2 rl-text-sm rl-text-gray-d">{label}</div>
            <div className="rl-space-y-3">
              {sizes.map((s) => (
                <div key={`${v}-${s.name}`} className="rl-grid rl-grid-cols-1 md:rl-grid-cols-3 rl-gap-3">
                  <Input rlVariant={v} sizeDs={s.name} placeholder={`${s.label} — обычный`} />
                  <Input rlVariant={v} sizeDs={s.name} prefix={<SearchOutlined />} placeholder={`${s.label} — prefix`} />
                  <Input rlVariant={v} sizeDs={s.name} suffix={<EyeInvisibleOutlined />} placeholder={`${s.label} — suffix`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const States: Story = {
  render: () => (
    <div className="rl-space-y-6">
      <div>
        <div className="rl-text-sm rl-text-gray-d rl-mb-2">Disabled</div>
        <div className="rl-flex rl-flex-col md:rl-flex-row rl-gap-3">
          <Input disabled placeholder="Blue disabled" />
          <Input rlVariant="red" disabled placeholder="Red disabled" />
          <Input rlVariant="green" disabled placeholder="Green disabled" />
        </div>
      </div>

      <div>
        <div className="rl-text-sm rl-text-gray-d rl-mb-2">Full width</div>
        <div className="rl-w-full">
          <Input fullWidth rlVariant="blue" sizeDs="lg" prefix={<SearchOutlined />} placeholder="Растянут на всю ширину контейнера" />
        </div>
      </div>

      <div>
        <div className="rl-text-sm rl-text-gray-d rl-mb-2">Error (tinted)</div>
        <div className="rl-flex rl-flex-col md:rl-flex-row rl-gap-3">
          <Input rlVariant="red" placeholder="Ошибка — мягкий красный фон" />
          <Input rlVariant="red" suffix="!" placeholder="Ошибка с suffix" />
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    rlVariant: 'blue',
    sizeDs: 'md',
    placeholder: 'Поиск...',
    prefix: <SearchOutlined />,
    fullWidth: false,
    disabled: false,
  },
  argTypes: {
    rlVariant: { control: 'radio', options: ['blue', 'red', 'green'] },
    sizeDs: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
