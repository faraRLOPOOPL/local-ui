import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../dist/index.mjs';

// В preview.ts сторибука подключите токены один раз:
// import '@realist-ui/tokens/style.css';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  args: {
    open: true,
    label: 'Заголовок',
    sizePct: 60,
    stroke: true,
    showClose: false,
    centered: true
  },
  argTypes: {
    sizePct: { control: { type: 'number', min: 20, max: 100, step: 5 } },
    stroke: { control: 'boolean' },
    centered: { control: 'boolean' },
    showClose: { controle: "boolean"},
    open: { control: 'boolean' }
  },
  parameters: { controls: { expanded: true } }
};
export default meta;

type Story = StoryObj<typeof Modal>;

const Placeholder = () => (
  <div className="rl-w-full rl-h-48 rl-rounded-rl rl-bg-neutral-30 rl-flex rl-items-center rl-justify-center rl-text-neutral-60">
    Replace content
  </div>
);

export const Default: Story = {
  render: (args) => (
    <Modal {...args}>
      <Placeholder />
    </Modal>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="rl-space-y-6">
      <Modal open label="40%" sizePct={40} onCancel={() => {}}>
        <Placeholder />
      </Modal>
      <Modal open label="60%" sizePct={60} onCancel={() => {}}>
        <Placeholder />
      </Modal>
      <Modal open label="80%" sizePct={80} onCancel={() => {}}>
        <Placeholder />
      </Modal>
    </div>
  )
};

export const NoStroke: Story = {
  render: () => (
    <Modal open label="Без затемнения" sizePct={60} stroke={false} onCancel={() => {}}>
      <Placeholder />
    </Modal>
  )
};

export const ControlledOpen: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="rl-space-y-4">
        <button
          className="rl-rounded-rl rl-border rl-border-solid rl-border-neutral-20 rl-px-4 rl-py-2"
          onClick={() => setOpen(true)}
        >
          Открыть модалку
        </button>
        <Modal
          open={open}
          onCancel={() => setOpen(false)}
          label="Контролируемая модалка"
          sizePct={60}
          stroke
        >
          <Placeholder />
        </Modal>
      </div>
    );
  }
};
