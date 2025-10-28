import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitch } from '../dist/index.mjs';

// Токены подключите один раз в preview.ts сторибука / приложении:
// import '@realist-ui/tokens/style.css';

const meta: Meta<typeof ThemeSwitch> = {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch,
  args: { sizeDs: 's', defaultChecked: true, disabled: false },
  argTypes: {
    sizeDs: { control: 'inline-radio', options: ['xs', 's', 'm'] },
    disabled: { control: 'boolean' }
  },
  parameters: { controls: { expanded: true } }
};
export default meta;

type Story = StoryObj<typeof ThemeSwitch>;

export const Default: Story = {};

export const Playground: Story = {
  render: (args) => {
    const [on, setOn] = useState<boolean>(!!args.defaultChecked);
    return (
      <div style={{ display: 'grid', gap: 12 }}>
        <ThemeSwitch {...args} checked={on} onChange={setOn} />
        <div style={{ color: 'var(--rl-color-neutral-20)' }}>state: {String(on)}</div>
      </div>
    );
  }
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <ThemeSwitch sizeDs="xs" defaultChecked />
      <ThemeSwitch sizeDs="s" />
      <ThemeSwitch sizeDs="m" defaultChecked />
    </div>
  )
};
