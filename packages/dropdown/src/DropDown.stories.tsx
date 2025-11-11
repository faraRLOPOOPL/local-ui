import type { Meta, StoryObj } from '@storybook/react';
import { DownOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { DropDown } from './index';

const meta: Meta<typeof DropDown> = {
  title: 'Components/DropDown',
  component: DropDown,
  parameters: { controls: { expanded: true } },
};
export default meta;

type Story = StoryObj<typeof DropDown>;

export const Default: Story = {
  args: {
    items: [
      { key: '1', label: 'Пункт меню 1', onClick: () => console.log('Item 1 clicked') },
      { key: '2', label: 'Пункт меню 2', onClick: () => console.log('Item 2 clicked') },
      { key: '3', label: 'Пункт меню 3', onClick: () => console.log('Item 3 clicked') },
    ],
    trigger: (
      <Button>
        Меню <DownOutlined />
      </Button>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { key: '1', label: 'Профиль', iconLeft: <UserOutlined />, onClick: () => console.log('Profile') },
      { key: '2', label: 'Настройки', iconLeft: <SettingOutlined />, onClick: () => console.log('Settings') },
      { key: '3', label: 'Выход', iconLeft: <LogoutOutlined />, onClick: () => console.log('Logout') },
    ],
    trigger: (
      <Button>
        Действия <DownOutlined />
      </Button>
    ),
  },
};

export const WithCaptions: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Профиль',
        caption: 'Просмотр и редактирование профиля',
        iconLeft: <UserOutlined />,
        onClick: () => console.log('Profile')
      },
      {
        key: '2',
        label: 'Настройки',
        caption: 'Настройки приложения',
        iconLeft: <SettingOutlined />,
        onClick: () => console.log('Settings')
      },
      {
        key: '3',
        label: 'Выход',
        caption: 'Выход из аккаунта',
        iconLeft: <LogoutOutlined />,
        onClick: () => console.log('Logout')
      },
    ],
    width: 280,
    trigger: (
      <Button>
        Меню пользователя <DownOutlined />
      </Button>
    ),
  },
};

export const WithRightIcons: Story = {
  args: {
    items: [
      { key: '1', label: 'Пункт 1', iconRight: <DownOutlined />, onClick: () => console.log('Item 1') },
      { key: '2', label: 'Пункт 2', iconRight: <DownOutlined />, onClick: () => console.log('Item 2') },
      { key: '3', label: 'Пункт 3', iconRight: <DownOutlined />, onClick: () => console.log('Item 3') },
    ],
    trigger: (
      <Button>
        Меню <DownOutlined />
      </Button>
    ),
  },
};

export const WithBothIcons: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Профиль',
        iconLeft: <UserOutlined />,
        iconRight: <DownOutlined />,
        onClick: () => console.log('Profile')
      },
      {
        key: '2',
        label: 'Настройки',
        iconLeft: <SettingOutlined />,
        iconRight: <DownOutlined />,
        onClick: () => console.log('Settings')
      },
      {
        key: '3',
        label: 'Выход',
        iconLeft: <LogoutOutlined />,
        iconRight: <DownOutlined />,
        onClick: () => console.log('Logout')
      },
    ],
    trigger: (
      <Button>
        Меню <DownOutlined />
      </Button>
    ),
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      { key: '1', label: 'Активный пункт', onClick: () => console.log('Active') },
      { key: '2', label: 'Отключённый пункт', disabled: true },
      { key: '3', label: 'Ещё активный', onClick: () => console.log('Active 2') },
      { key: '4', label: 'Тоже отключён', disabled: true },
    ],
    trigger: (
      <Button>
        Меню <DownOutlined />
      </Button>
    ),
  },
};

export const CustomWidth: Story = {
  args: {
    items: [
      { key: '1', label: 'Пункт меню 1', onClick: () => console.log('Item 1') },
      { key: '2', label: 'Пункт меню 2', onClick: () => console.log('Item 2') },
      { key: '3', label: 'Пункт меню 3', onClick: () => console.log('Item 3') },
    ],
    width: 300,
    trigger: (
      <Button>
        Широкое меню <DownOutlined />
      </Button>
    ),
  },
};

export const WithMaxHeight: Story = {
  args: {
    items: [
      { key: '1', label: 'Пункт 1', onClick: () => console.log('Item 1') },
      { key: '2', label: 'Пункт 2', onClick: () => console.log('Item 2') },
      { key: '3', label: 'Пункт 3', onClick: () => console.log('Item 3') },
      { key: '4', label: 'Пункт 4', onClick: () => console.log('Item 4') },
      { key: '5', label: 'Пункт 5', onClick: () => console.log('Item 5') },
      { key: '6', label: 'Пункт 6', onClick: () => console.log('Item 6') },
      { key: '7', label: 'Пункт 7', onClick: () => console.log('Item 7') },
      { key: '8', label: 'Пункт 8', onClick: () => console.log('Item 8') },
    ],
    maxHeight: 200,
    trigger: (
      <Button>
        Меню с прокруткой <DownOutlined />
      </Button>
    ),
  },
};
