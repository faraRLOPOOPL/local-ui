import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TabButton, TabsMenu } from './index';

const meta: Meta<typeof TabButton> = {
  title: 'Components/Tabs',
  component: TabButton,
  parameters: { controls: { expanded: true } },
};
export default meta;

type Story = StoryObj<typeof TabButton>;

// ========== TabButton Stories ==========
export const TabButtonDefault: Story = {
  args: {
    children: 'Tab',
    active: false,
    disabled: false,
  },
};

export const TabButtonActive: Story = {
  args: {
    children: 'Tab',
    active: true,
    disabled: false,
  },
};

export const TabButtonDisabled: Story = {
  args: {
    children: 'Tab',
    active: false,
    disabled: true,
  },
};

export const TabButtonStates: Story = {
  render: () => (
    <div className="rl-flex rl-flex-col rl-gap-4">
      <div>
        <p className="rl-mb-2 rl-text-neutral-80">Default (hover me)</p>
        <TabButton>Tab</TabButton>
      </div>
      <div>
        <p className="rl-mb-2 rl-text-neutral-80">Active</p>
        <TabButton active>Tab</TabButton>
      </div>
      <div>
        <p className="rl-mb-2 rl-text-neutral-80">Disabled</p>
        <TabButton disabled>Tab</TabButton>
      </div>
    </div>
  ),
};

// ========== TabsMenu Stories ==========
export const TabsMenuWithTwoTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState(0);
    return (
      <TabsMenu>
        <TabButton active={activeTab === 0} onClick={() => setActiveTab(0)}>
          Tab
        </TabButton>
        <TabButton active={activeTab === 1} onClick={() => setActiveTab(1)}>
          Tab 2
        </TabButton>
      </TabsMenu>
    );
  },
};

export const TabsMenuWithThreeTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState(0);
    return (
      <TabsMenu>
        <TabButton active={activeTab === 0} onClick={() => setActiveTab(0)}>
          Tab
        </TabButton>
        <TabButton active={activeTab === 1} onClick={() => setActiveTab(1)}>
          Tab 2
        </TabButton>
        <TabButton active={activeTab === 2} onClick={() => setActiveTab(2)}>
          Tab 3
        </TabButton>
      </TabsMenu>
    );
  },
};

export const TabsMenuWithFourTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState(0);
    return (
      <TabsMenu>
        <TabButton active={activeTab === 0} onClick={() => setActiveTab(0)}>
          Tab
        </TabButton>
        <TabButton active={activeTab === 1} onClick={() => setActiveTab(1)}>
          Tab 2
        </TabButton>
        <TabButton active={activeTab === 2} onClick={() => setActiveTab(2)}>
          Tab 3
        </TabButton>
        <TabButton active={activeTab === 3} onClick={() => setActiveTab(3)}>
          Tab 4
        </TabButton>
      </TabsMenu>
    );
  },
};

export const TabsMenuWithFiveTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState(0);
    return (
      <TabsMenu>
        <TabButton active={activeTab === 0} onClick={() => setActiveTab(0)}>
          Tab
        </TabButton>
        <TabButton active={activeTab === 1} onClick={() => setActiveTab(1)}>
          Tab 2
        </TabButton>
        <TabButton active={activeTab === 2} onClick={() => setActiveTab(2)}>
          Tab 3
        </TabButton>
        <TabButton active={activeTab === 3} onClick={() => setActiveTab(3)}>
          Tab 4
        </TabButton>
        <TabButton active={activeTab === 4} onClick={() => setActiveTab(4)}>
          Tab 5
        </TabButton>
      </TabsMenu>
    );
  },
};

export const TabsMenuWithDisabled: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState(0);
    return (
      <TabsMenu>
        <TabButton active={activeTab === 0} onClick={() => setActiveTab(0)}>
          Tab
        </TabButton>
        <TabButton active={activeTab === 1} onClick={() => setActiveTab(1)}>
          Tab 2
        </TabButton>
        <TabButton disabled>Tab 3 (Disabled)</TabButton>
        <TabButton active={activeTab === 3} onClick={() => setActiveTab(3)}>
          Tab 4
        </TabButton>
      </TabsMenu>
    );
  },
};