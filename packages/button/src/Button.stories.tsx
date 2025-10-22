import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { PlusOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

const meta: Meta<typeof Button> = {
  title: 'UIKit/Button',
  component: Button,
  parameters: { layout: 'padded' },
  args: {
    rlType: 'primary',
    sizeDs: 'm',
    iconPosition: 'none',
    children: 'Кнопка',
  },
  argTypes: {
    rlType: { control: 'select', options: ['primary', 'secondary', 'text', 'success', 'error'] },
    sizeDs: { control: 'select', options: ['xl', 'l', 'm', 's'] },
    iconPosition: { control: 'select', options: ['none', 'left', 'right', 'only'] },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  render: (args) => {
    const iconMap = {
      primary: <PlusOutlined />,
      secondary: <PlusOutlined />,
      text: <PlusOutlined />,
      success: <CheckOutlined />,
      error: <CloseOutlined />,
    } as const;

    const icon = iconMap[(args.rlType ?? 'primary') as keyof typeof iconMap];

    return (
      <div className="rl-flex rl-flex-col rl-gap-6">
        {/* размеры */}
        <div className="rl-flex rl-gap-4 rl-items-center rl-flex-wrap">
          <Button {...args} sizeDs="s">S</Button>
          <Button {...args} sizeDs="m">M</Button>
          <Button {...args} sizeDs="l">L</Button>
          <Button {...args} sizeDs="xl">XL</Button>
        </div>

        {/* иконки */}
        <div className="rl-flex rl-gap-4 rl-items-center rl-flex-wrap">
          <Button {...args} icon={icon} iconPosition="left">Иконка слева</Button>
          <Button {...args} icon={icon} iconPosition="right">Иконка справа</Button>
          <Button {...args} icon={icon} iconPosition="only" aria-label="Только иконка" />
          <Button {...args} iconPosition="none">Без иконки</Button>
        </div>

        {/* disabled */}
        <div className="rl-flex rl-gap-4 rl-items-center rl-flex-wrap">
          <Button {...args} disabled>Disabled</Button>
          <Button {...args} rlType="secondary" disabled>Disabled Secondary</Button>
        </div>
      </div>
    );
  },
};

export const Primary: Story   = { args: { rlType: 'primary'   } };
export const Secondary: Story = { args: { rlType: 'secondary' } };
export const Text: Story      = { args: { rlType: 'text'      } };
export const Success: Story   = { args: { rlType: 'success'   } };
export const Error: Story     = { args: { rlType: 'error'     } };
