import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Checkbox } from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { controls: { expanded: true } },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

// ========== Basic States ==========
export const Unchecked: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'Checkbox label',
  },
};

export const Checked: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(true);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'Checkbox label',
  },
};

export const Indeterminate: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'Checkbox label',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Checkbox label',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Checkbox label',
    checked: true,
    disabled: true,
  },
};

// ========== Sizes ==========
export const SizeMedium: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'Medium size (24x24)',
    size: 'm',
  },
};

export const SizeSmall: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'Small size (20x20)',
    size: 's',
  },
};

// ========== With Caption ==========
export const WithCaption: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'Checkbox label',
    caption: 'Additional description text',
  },
};

export const WithCaptionSmall: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'Checkbox label',
    caption: 'Additional description text',
    size: 's',
  },
};

// ========== Icon Types ==========
export const IconTypeCheck: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(true);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'Check icon',
    iconType: 'check',
  },
};

export const IconTypeMinus: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(true);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'Minus icon',
    iconType: 'minus',
  },
};

// ========== With Icon ==========
export const WithRightIcon: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'With info icon',
    icon: <InfoCircleOutlined />,
  },
};

export const WithRightIconAndCaption: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'Checkbox with icon',
    caption: 'Additional information',
    icon: <InfoCircleOutlined />,
  },
};

// ========== Interactive Example ==========
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <Checkbox
        label="Click to toggle"
        caption="This checkbox is interactive"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

// ========== All States Showcase ==========
export const AllStates: Story = {
  render: () => {
    const [states, setStates] = React.useState({
      m1: false,
      m2: true,
      m3: false,
      s1: false,
      s2: true,
      s3: false,
      c1: false,
      c2: false,
      c3: false,
      i1: true,
      i2: true,
      i3: false,
    });

    const toggle = (key: string) => {
      setStates((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
    };

    return (
      <div className="rl-flex rl-flex-col rl-gap-4">
        <div>
          <h3 className="rl-mb-2 rl-text-neutral-80 rl-font-medium">Medium Size (24x24)</h3>
          <div className="rl-flex rl-flex-col rl-gap-2">
            <Checkbox label="Unchecked" size="m" checked={states.m1} onChange={() => toggle('m1')} />
            <Checkbox label="Checked" size="m" checked={states.m2} onChange={() => toggle('m2')} />
            <Checkbox label="Indeterminate" size="m" indeterminate checked={states.m3} onChange={() => toggle('m3')} />
            <Checkbox label="Disabled" size="m" disabled />
            <Checkbox label="Disabled Checked" size="m" checked disabled />
          </div>
        </div>

        <div>
          <h3 className="rl-mb-2 rl-text-neutral-80 rl-font-medium">Small Size (20x20)</h3>
          <div className="rl-flex rl-flex-col rl-gap-2">
            <Checkbox label="Unchecked" size="s" checked={states.s1} onChange={() => toggle('s1')} />
            <Checkbox label="Checked" size="s" checked={states.s2} onChange={() => toggle('s2')} />
            <Checkbox label="Indeterminate" size="s" indeterminate checked={states.s3} onChange={() => toggle('s3')} />
            <Checkbox label="Disabled" size="s" disabled />
            <Checkbox label="Disabled Checked" size="s" checked disabled />
          </div>
        </div>

        <div>
          <h3 className="rl-mb-2 rl-text-neutral-80 rl-font-medium">With Captions</h3>
          <div className="rl-flex rl-flex-col rl-gap-2">
            <Checkbox
              label="Medium with caption"
              caption="Caption text for medium"
              size="m"
              checked={states.c1}
              onChange={() => toggle('c1')}
            />
            <Checkbox
              label="Small with caption"
              caption="Caption text for small"
              size="s"
              checked={states.c2}
              onChange={() => toggle('c2')}
            />
            <Checkbox
              label="With icon"
              caption="And caption text"
              icon={<InfoCircleOutlined />}
              checked={states.c3}
              onChange={() => toggle('c3')}
            />
          </div>
        </div>

        <div>
          <h3 className="rl-mb-2 rl-text-neutral-80 rl-font-medium">Icon Types</h3>
          <div className="rl-flex rl-flex-col rl-gap-2">
            <Checkbox label="Check icon" checked={states.i1} onChange={() => toggle('i1')} iconType="check" />
            <Checkbox label="Minus icon" checked={states.i2} onChange={() => toggle('i2')} iconType="minus" />
            <Checkbox label="Indeterminate (minus)" indeterminate checked={states.i3} onChange={() => toggle('i3')} />
          </div>
        </div>
      </div>
    );
  },
};
