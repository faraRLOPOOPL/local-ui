import type { Meta, StoryObj } from '@storybook/react';
import { DownOutlined, UserOutlined, SettingOutlined, LogoutOutlined, BellOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { DropDown } from './DropDown';

const meta: Meta<typeof DropDown> = {
  title: 'Components/DropDown',
  component: DropDown,
  parameters: {
    controls: { expanded: true },
    layout: 'centered'
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DropDown>;

export const Default: Story = {
  args: {
    items: [
      { key: '1', label: 'Профиль пользователя', onClick: () => console.log('Profile clicked') },
      { key: '2', label: 'Настройки системы', onClick: () => console.log('Settings clicked') },
      { key: '3', label: 'Выход из аккаунта', onClick: () => console.log('Logout clicked') },
    ],
    trigger: (
      <Button type="primary">
        Открыть меню <DownOutlined />
      </Button>
    ),
  },
};

export const WithIconsLeft: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Профиль',
        iconLeft: <UserOutlined />,
        onClick: () => console.log('Profile')
      },
      {
        key: '2',
        label: 'Настройки',
        iconLeft: <SettingOutlined />,
        onClick: () => console.log('Settings')
      },
      {
        key: '3',
        label: 'Уведомления',
        iconLeft: <BellOutlined />,
        onClick: () => console.log('Notifications')
      },
      {
        key: '4',
        label: 'Выход',
        iconLeft: <LogoutOutlined />,
        onClick: () => console.log('Logout')
      },
    ],
    trigger: (
      <Button type="default">
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
        label: 'Мой профиль',
        caption: 'Просмотр и редактирование личной информации',
        iconLeft: <UserOutlined />,
        onClick: () => console.log('Profile')
      },
      {
        key: '2',
        label: 'Настройки приложения',
        caption: 'Управление параметрами и конфигурацией',
        iconLeft: <SettingOutlined />,
        onClick: () => console.log('Settings')
      },
      {
        key: '3',
        label: 'Уведомления',
        caption: 'Настройка оповещений и подписок',
        iconLeft: <BellOutlined />,
        onClick: () => console.log('Notifications')
      },
      {
        key: '4',
        label: 'Выход',
        caption: 'Завершить текущий сеанс работы',
        iconLeft: <LogoutOutlined />,
        onClick: () => console.log('Logout')
      },
    ],
    width: 320,
    trigger: (
      <Button type="primary" size="large">
        Меню пользователя <DownOutlined />
      </Button>
    ),
  },
};

export const WithIconsRight: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Раскрыть подменю',
        iconRight: <DownOutlined />,
        onClick: () => console.log('Expand 1')
      },
      {
        key: '2',
        label: 'Ещё опции',
        iconRight: <DownOutlined />,
        onClick: () => console.log('Expand 2')
      },
      {
        key: '3',
        label: 'Дополнительно',
        iconRight: <DownOutlined />,
        onClick: () => console.log('Expand 3')
      },
    ],
    trigger: (
      <Button>
        С иконками справа <DownOutlined />
      </Button>
    ),
  },
};

export const WithBothIcons: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Избранное',
        caption: 'Управление избранными элементами',
        iconLeft: <HeartOutlined />,
        iconRight: <StarOutlined />,
        onClick: () => console.log('Favorites')
      },
      {
        key: '2',
        label: 'Профиль',
        caption: 'Настройки профиля и аккаунта',
        iconLeft: <UserOutlined />,
        iconRight: <SettingOutlined />,
        onClick: () => console.log('Profile')
      },
      {
        key: '3',
        label: 'Уведомления',
        caption: 'Центр уведомлений и оповещений',
        iconLeft: <BellOutlined />,
        iconRight: <DownOutlined />,
        onClick: () => console.log('Notifications')
      },
    ],
    width: 340,
    trigger: (
      <Button type="primary">
        Иконки с обеих сторон <DownOutlined />
      </Button>
    ),
  },
};

export const WithDisabledItems: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Активный пункт',
        iconLeft: <UserOutlined />,
        onClick: () => console.log('Active 1')
      },
      {
        key: '2',
        label: 'Отключённый пункт',
        caption: 'Этот пункт недоступен',
        iconLeft: <SettingOutlined />,
        disabled: true
      },
      {
        key: '3',
        label: 'Ещё активный',
        iconLeft: <BellOutlined />,
        onClick: () => console.log('Active 2')
      },
      {
        key: '4',
        label: 'Тоже отключён',
        caption: 'Недостаточно прав доступа',
        iconLeft: <LogoutOutlined />,
        disabled: true
      },
      {
        key: '5',
        label: 'Доступный пункт',
        iconLeft: <StarOutlined />,
        onClick: () => console.log('Active 3')
      },
    ],
    width: 280,
    trigger: (
      <Button>
        С отключёнными пунктами <DownOutlined />
      </Button>
    ),
  },
};

export const CustomWidth: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Широкий пункт меню с длинным текстом',
        iconLeft: <UserOutlined />,
        onClick: () => console.log('Item 1')
      },
      {
        key: '2',
        label: 'Ещё один широкий пункт',
        caption: 'С подробным описанием что делает этот пункт меню',
        iconLeft: <SettingOutlined />,
        onClick: () => console.log('Item 2')
      },
      {
        key: '3',
        label: 'Третий пункт',
        iconLeft: <BellOutlined />,
        onClick: () => console.log('Item 3')
      },
    ],
    width: 400,
    trigger: (
      <Button type="primary" size="large">
        Широкое меню (400px) <DownOutlined />
      </Button>
    ),
  },
};

export const WithMaxHeight: Story = {
  args: {
    items: [
      { key: '1', label: 'Пункт меню 1', iconLeft: <UserOutlined />, onClick: () => console.log('Item 1') },
      { key: '2', label: 'Пункт меню 2', iconLeft: <SettingOutlined />, onClick: () => console.log('Item 2') },
      { key: '3', label: 'Пункт меню 3', iconLeft: <BellOutlined />, onClick: () => console.log('Item 3') },
      { key: '4', label: 'Пункт меню 4', iconLeft: <HeartOutlined />, onClick: () => console.log('Item 4') },
      { key: '5', label: 'Пункт меню 5', iconLeft: <StarOutlined />, onClick: () => console.log('Item 5') },
      { key: '6', label: 'Пункт меню 6', iconLeft: <UserOutlined />, onClick: () => console.log('Item 6') },
      { key: '7', label: 'Пункт меню 7', iconLeft: <SettingOutlined />, onClick: () => console.log('Item 7') },
      { key: '8', label: 'Пункт меню 8', iconLeft: <BellOutlined />, onClick: () => console.log('Item 8') },
      { key: '9', label: 'Пункт меню 9', iconLeft: <HeartOutlined />, onClick: () => console.log('Item 9') },
      { key: '10', label: 'Пункт меню 10', iconLeft: <StarOutlined />, onClick: () => console.log('Item 10') },
    ],
    maxHeight: 300,
    width: 280,
    trigger: (
      <Button type="primary">
        Меню с прокруткой <DownOutlined />
      </Button>
    ),
  },
};

export const ComplexExample: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Александр Иванов',
        caption: 'alexander.ivanov@example.com',
        iconLeft: <UserOutlined />,
        iconRight: <SettingOutlined />,
        onClick: () => console.log('User profile')
      },
      {
        key: '2',
        label: 'Уведомления',
        caption: 'У вас 5 новых уведомлений',
        iconLeft: <BellOutlined />,
        onClick: () => console.log('Notifications')
      },
      {
        key: '3',
        label: 'Избранное',
        caption: 'Сохранённые элементы и закладки',
        iconLeft: <HeartOutlined />,
        onClick: () => console.log('Favorites')
      },
      {
        key: '4',
        label: 'Настройки',
        caption: 'Недоступно в демо режиме',
        iconLeft: <SettingOutlined />,
        disabled: true
      },
      {
        key: '5',
        label: 'Выйти из аккаунта',
        caption: 'Завершить текущую сессию',
        iconLeft: <LogoutOutlined />,
        onClick: () => console.log('Logout')
      },
    ],
    width: 360,
    trigger: (
      <Button type="primary" size="large" style={{ width: 200 }}>
        Меню пользователя <DownOutlined />
      </Button>
    ),
  },
};

export const MinimalExample: Story = {
  args: {
    items: [
      { key: '1', label: 'Действие 1', onClick: () => console.log('Action 1') },
      { key: '2', label: 'Действие 2', onClick: () => console.log('Action 2') },
      { key: '3', label: 'Действие 3', onClick: () => console.log('Action 3') },
    ],
    trigger: <Button>Простое меню</Button>,
  },
};
