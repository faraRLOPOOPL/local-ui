import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { House, File, Compass } from '@realist-ui/design-system/icons';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const IconOnly: Story = {
  args: {
    items: [
      { icon: <House size={20} weight="regular" /> },
      { icon: <File size={20} weight="regular" /> },
      { icon: <Compass size={20} weight="regular" /> },
    ],
  },
};

export const TextOnly: Story = {
  args: {
    items: [
      { label: 'Заявки' },
      { label: 'Создание новой заявки' },
    ],
  },
};

export const TextWithIcon: Story = {
  args: {
    items: [
      { label: 'Заявки', icon: <House size={18} weight="regular" /> },
      { label: 'Создание новой заявки', icon: <File size={18} weight="regular" /> },
    ],
  },
};

export const Mixed: Story = {
  args: {
    items: [
      { icon: <House size={20} weight="regular" /> },
      { label: 'Заявки' },
      { label: 'Создание новой заявки', icon: <File size={18} weight="regular" /> },
    ],
  },
};
