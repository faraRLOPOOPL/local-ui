import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Click me', rlType: 'primary', sizeDs: 'm' },
  parameters: { controls: { expanded: true } }
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { rlType: 'primary' } };
export const Secondary: Story = { args: { rlType: 'secondary' } };
export const Text: Story = { args: { rlType: 'text' } };
export const Success: Story = { args: { rlType: 'success' } };
export const Error: Story = { args: { rlType: 'error' } };

export const SizeXL: Story = { args: { sizeDs: 'xl' } };
export const SizeL:  Story = { args: { sizeDs: 'l' } };
export const SizeM:  Story = { args: { sizeDs: 'm' } };
export const SizeS:  Story = { args: { sizeDs: 's' } };

export const WithIconLeft: Story = {
  args: { rlType: 'primary', icon: <ArrowRightOutlined />, iconPosition: 'left', children: 'Next' },
};
export const WithIconRight: Story = {
  args: { rlType: 'primary', icon: <ArrowRightOutlined />, iconPosition: 'right', children: 'Next' },
};
export const IconOnly: Story = {
  args: { rlType: 'primary', icon: <ArrowRightOutlined />, iconPosition: 'only', 'aria-label': 'Next' },
};
export const Disabled: Story = {
  args: { rlType: 'primary', children: 'Disabled', disabled: true },
};
