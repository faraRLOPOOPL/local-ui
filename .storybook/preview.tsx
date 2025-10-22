import React from 'react';
// import '../packages/tokens/src/tokens.css';
// import '../packages/tailwind/src/tailwind.css';
import { ConfigProvider } from 'antd';
import "../packages/tokens/dist/style.css"

// если ты хочешь, чтобы сторибук сам компилировал tailwind из src:

// import { antdThemeTokens } from '../packages/tokens/src';

export const decorators = [
  (Story: any) => (
    <ConfigProvider>
      <div className="rl-min-h-screen rl-bg-white rl-p-6">
        <Story />
      </div>
    </ConfigProvider>
  ),
];
