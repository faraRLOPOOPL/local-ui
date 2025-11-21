import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    controls: { expanded: true },
    layout: 'centered'
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    total: 500,
    defaultCurrent: 1,
    defaultPageSize: 10,
  },
};

export const FewPages: Story = {
  args: {
    total: 50,
    defaultCurrent: 1,
    defaultPageSize: 10,
  },
};

export const ManyPages: Story = {
  args: {
    total: 1000,
    defaultCurrent: 1,
    defaultPageSize: 10,
  },
};

export const CurrentInMiddle: Story = {
  args: {
    total: 500,
    defaultCurrent: 25,
    defaultPageSize: 10,
  },
};

export const SmallPageSize: Story = {
  args: {
    total: 100,
    defaultCurrent: 1,
    defaultPageSize: 5,
  },
};

export const Controlled: Story = {
  render: () => {
    const [current, setCurrent] = useState(1);

    return (
      <div className="rl-flex rl-flex-col rl-items-center rl-gap-4">
        <Pagination
          total={500}
          current={current}
          pageSize={10}
          onChange={(page) => setCurrent(page)}
        />
        <p className="rl-text-neutral-60 rl-text-sm">
          Текущая страница: {current}
        </p>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    total: 500,
    defaultCurrent: 1,
    defaultPageSize: 10,
    disabled: true,
  },
};

export const Simple: Story = {
  args: {
    total: 50,
    defaultCurrent: 3,
    defaultPageSize: 10,
    simple: true,
  },
};

export const WithTotal: Story = {
  args: {
    total: 500,
    defaultCurrent: 1,
    defaultPageSize: 10,
    showTotal: (total, range) => `${range[0]}-${range[1]} из ${total} записей`,
  },
};
