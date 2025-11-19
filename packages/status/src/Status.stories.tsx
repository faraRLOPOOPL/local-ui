import type { Meta, StoryObj } from '@storybook/react';
import { Status } from './Status';

const meta: Meta<typeof Status> = {
  title: 'Components/Status',
  component: Status,
  parameters: {
    controls: { expanded: true },
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['green', 'yellow', 'orange', 'red', 'electric', 'indigo', 'lightblue', 'gray'],
    },
    size: {
      control: 'select',
      options: ['m'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Status>;

export const Green: Story = {
  args: {
    color: 'green',
    children: 'Компонент статуса',
  },
};

export const Yellow: Story = {
  args: {
    color: 'yellow',
    children: 'Компонент статуса',
  },
};

export const Orange: Story = {
  args: {
    color: 'orange',
    children: 'Компонент статуса',
  },
};

export const Red: Story = {
  args: {
    color: 'red',
    children: 'Компонент статуса',
  },
};

export const Electric: Story = {
  args: {
    color: 'electric',
    children: 'Компонент статуса',
  },
};

export const Indigo: Story = {
  args: {
    color: 'indigo',
    children: 'Компонент статуса',
  },
};

export const LightBlue: Story = {
  args: {
    color: 'lightblue',
    children: 'Компонент статуса',
  },
};

export const Gray: Story = {
  args: {
    color: 'gray',
    children: 'Компонент статуса',
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="rl-flex rl-flex-col rl-gap-4 rl-p-4">
      <Status color="green">Зелёный статус</Status>
      <Status color="yellow">Жёлтый статус</Status>
      <Status color="orange">Оранжевый статус</Status>
      <Status color="red">Красный статус</Status>
      <Status color="electric">Electric статус</Status>
      <Status color="indigo">Indigo статус</Status>
      <Status color="lightblue">Голубой статус</Status>
      <Status color="gray">Серый статус</Status>
    </div>
  ),
};

export const ShortText: Story = {
  args: {
    color: 'green',
    children: 'OK',
  },
};

export const LongText: Story = {
  args: {
    color: 'red',
    children: 'Очень длинный текст статуса',
  },
};

export const CustomContent: Story = {
  args: {
    color: 'electric',
    children: (
      <>
        <span>Статус</span>
        <span style={{ marginLeft: '4px' }}>✓</span>
      </>
    ),
  },
};
