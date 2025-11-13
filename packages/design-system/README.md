# @local-ui/design-system

Центральный пакет дизайн-системы для local-ui, включающий:
- CSS токены (цвета, типографика, размеры)
- Шрифт Rubik
- Tailwind CSS preset
- Логотип и ассеты
- Интеграция с Phosphor Icons

## Установка

```bash
npm install @local-ui/design-system
```

Иконки включены в пакет, дополнительная установка не требуется.

## Использование

### 1. CSS Токены

Импортируйте tokens.css в корневой файл вашего приложения:

```tsx
// main.tsx или App.tsx
import '@local-ui/design-system/tokens.css';
```

Токены автоматически поддерживают светлую и темную темы:

```tsx
// Переключение темы
<html data-theme="dark"> // или "light"
```

Или используйте системные настройки (автоматически):

```tsx
<html> // будет использовать prefers-color-scheme
```

### 2. Шрифты

Импортируйте fonts.css для использования локального шрифта Rubik:

```tsx
import '@local-ui/design-system/fonts.css';
```

Или используйте Google Fonts (уже включен в tokens.css):

```css
/* Уже есть в tokens.css */
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');
```

### 3. Tailwind CSS

Добавьте preset в ваш `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@local-ui/design-system/tailwind-preset')
  ],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@local-ui/*/dist/**/*.{js,mjs}', // для компонентов UI
  ],
  theme: {
    extend: {
      // ваши кастомные расширения
    },
  },
};
```

Теперь вы можете использовать классы:

```tsx
<div className="rl-bg-neutral-0 rl-text-neutral-90">
  <h1 className="rl-text-h1 rl-font-rubik rl-text-indigo-60">
    Hello World
  </h1>
  <p className="rl-text-text1-l rl-text-neutral-70">
    Body text
  </p>
</div>
```

### 4. Иконки

Design-system включает кураторский набор иконок из Phosphor Icons. Доступны только предодобренные иконки.

#### Использование

```tsx
import { MagnifyingGlass, User, ArrowRight } from '@local-ui/design-system/icons';

function MyComponent() {
  return (
    <div>
      <MagnifyingGlass size={24} color="var(--rl-color-indigo-60)" />
      <User size={32} weight="bold" />
      <ArrowRight size={24} weight="fill" />
    </div>
  );
}
```

#### В компонентах Button/Input:

```tsx
import { Button } from '@local-ui/button';
import { ArrowRight, Check } from '@local-ui/design-system/icons';

<Button icon={<ArrowRight size={20} />}>
  Next
</Button>

<Button icon={<Check />} iconPosition="left">
  Confirm
</Button>
```

#### Доступные веса (weights):
- `thin`
- `light`
- `regular` (по умолчанию)
- `bold`
- `fill`
- `duotone`

#### Доступные иконки:

**Arrows & Navigation:**
`ArrowRight`, `ArrowLeft`, `ArrowUp`, `ArrowDown`, `CaretRight`, `CaretLeft`, `CaretUp`, `CaretDown`

**Common Actions:**
`MagnifyingGlass`, `X`, `Plus`, `Minus`, `Check`, `Warning`, `Info`, `Question`

**Interface:**
`DotsThree`, `DotsThreeVertical`, `List`, `Gear`, `Bell`, `Calendar`, `Clock`, `Eye`, `EyeSlash`

**User & Account:**
`User`, `UserCircle`, `Users`, `SignIn`, `SignOut`

**Files & Documents:**
`File`, `FileText`, `Folder`, `FolderOpen`, `Download`, `Upload`, `Paperclip`

**Communication:**
`Envelope`, `EnvelopeOpen`, `ChatCircle`, `Phone`

**Media:**
`Image`, `Camera`, `Play`, `Pause`

**Edit:**
`Pencil`, `PencilSimple`, `Trash`, `Copy`

**Navigation:**
`House`, `MapPin`, `Compass`

> Нужна дополнительная иконка? Создайте issue в репозитории с обоснованием.

### 5. Логотип

```tsx
import LogoUrl from '@local-ui/design-system/src/assets/logo.svg';

function Header() {
  return <img src={LogoUrl} alt="Logo" />;
}
```

## Доступные токены

### Цвета

#### Neutral
- `--rl-color-neutral-00` до `--rl-color-neutral-90`

#### Semantic Colors
- `--rl-color-indigo-{10-80}` (brand)
- `--rl-color-electric-{10-80}` (violet)
- `--rl-color-cyan-{10-80}`
- `--rl-color-error-{10-80}`
- `--rl-color-success-{10-80}`
- `--rl-color-warning-{10-80}` (orange)
- `--rl-color-attention-{10-80}` (yellow)

#### Special
- `--rl-color-disable-bkg`, `--rl-color-disable`
- `--rl-color-opacity-{05-90}`

### Типографика

#### Font Sizes
- Headlines: `--rl-font-size-hl1` до `hl3`
- Headings: `--rl-font-size-h1` до `h6`
- Body: `--rl-font-size-text1-l`, `text2-l`, `text1-s`, `text2-s`
- Subtitles: `--rl-font-size-sub1` до `sub3`
- Captions: `--rl-font-size-caption1`, `caption2`
- Buttons: `--rl-font-size-button1`, `button2`

#### Line Heights
Соответствующие переменные с префиксом `--rl-line-*`

### Border Radius
- `--rl-radius-12`, `--rl-radius-14`, `--rl-radius-24`, `--rl-radius-32`

## Структура пакета

```
packages/design-system/
├── src/
│   ├── tokens.css           # CSS переменные (светлая/темная тема)
│   ├── fonts/
│   │   ├── fonts.css        # @font-face определения
│   │   └── rubik.ttf        # Шрифт Rubik
│   └── assets/
│       ├── logo.svg         # Логотип
│       └── icons/           # Будущие иконки
├── tailwind.preset.cjs      # Tailwind конфиг
└── package.json
```

## Темная тема

Переключение темы через атрибут `data-theme`:

```tsx
// Light theme
document.documentElement.setAttribute('data-theme', 'light');

// Dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// System preference (удалить атрибут)
document.documentElement.removeAttribute('data-theme');
```

## TypeScript

Пакет поддерживает TypeScript. Типы будут доступны после сборки.

## Лицензия

MIT
