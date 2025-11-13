import React from 'react';
import { ConfigProvider } from 'antd';
import '../packages/design-system/src/tokens.css';
import '../packages/design-system/src/fonts/fonts.css';

export const decorators = [
  (Story: any) => (
    <ConfigProvider>
      <div className="rl-min-h-screen rl-bg-white rl-p-6">
        <Story />
      </div>
    </ConfigProvider>
  ),
];
