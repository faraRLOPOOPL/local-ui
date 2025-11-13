import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  args: {
    sizeDs: 'm',
    placeholder: 'Search...',
    width: 360,
  },
  argTypes: {
    sizeDs: { control: 'inline-radio', options: ['l', 'm', 's'] },
    width: {
      control: { type: 'number', min: 200, max: 800, step: 10 },
      description: 'Width in pixels or string (e.g. "100%")',
    },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: `
Search Input - обертка над Input с полностью скругленными углами и иконкой поиска

**Стили (автоматически через CSS):**
- \`default\`: text=neutral-50, border=neutral-50, icon=neutral-60
- \`focus\`: text=neutral-80, border=electric-50, icon=neutral-60
- \`has-value\`: text=neutral-80, border=neutral-50, icon=indigo-60
        `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="rl-space-y-4">
      <Search sizeDs="l" placeholder="Large search..." width={480} />
      <Search sizeDs="m" placeholder="Medium search..." width={360} />
      <Search sizeDs="s" placeholder="Small search..." width={280} />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    label: 'Search products',
    placeholder: 'Enter product name...',
  },
};

export const WithCaption: Story = {
  args: {
    caption: 'Press Enter to search or blur the input',
    placeholder: 'Type and press Enter...',
  },
};

export const InteractiveDemo: Story = {
  render: () => (
    <div className="rl-space-y-4">
      <Search
        placeholder="Type to see styles change..."
        width={480}
        label="Product Search"
        caption="Focus to see electric border, type text to see indigo icon"
      />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="rl-space-y-6">
      <div>
        <div className="rl-text-sm rl-font-medium rl-text-neutral-80 rl-mb-2">
          Default State (no value, no focus)
        </div>
        <Search
          placeholder="Click to activate..."
          width={360}
          caption="Gray border, gray icon"
        />
      </div>

      <div>
        <div className="rl-text-sm rl-font-medium rl-text-neutral-80 rl-mb-2">
          With Value (has text)
        </div>
        <Search
          defaultValue="example search"
          width={360}
          caption="Gray border, indigo icon"
        />
      </div>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Full width search...',
    width: undefined, // removes width constraint
    label: 'Search Everything',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled search...',
    disabled: true,
    defaultValue: 'Cannot edit',
  },
};

export const WithError: Story = {
  args: {
    error: true,
    caption: 'Search query is too short',
    placeholder: 'Min 3 characters...',
  },
};
