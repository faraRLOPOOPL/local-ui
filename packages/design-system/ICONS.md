# Работа с иконками в @local-ui/design-system

## Концепция

Design-system использует **whitelisted** подход к иконкам:
- Мы выбираем необходимые иконки из библиотеки [Phosphor Icons](https://phosphoricons.com/)
- Реэкспортируем только эти иконки через `@local-ui/design-system/icons`
- Пользователь может использовать **только** предодобренные иконки

## Преимущества

✅ **Контроль над дизайн-системой** - только утвержденные иконки
✅ **Легкий bundle** - пользователь не загружает всю библиотеку Phosphor
✅ **Простой импорт** - один источник для всех иконок
✅ **Tree-shaking** - только используемые иконки попадают в бандл
✅ **TypeScript** - полная типизация из коробки

## Использование

### Базовый пример

```tsx
import { ArrowRight, MagnifyingGlass, User } from '@local-ui/design-system/icons';

function MyComponent() {
  return (
    <div>
      <ArrowRight size={24} />
      <MagnifyingGlass size={20} color="var(--rl-color-indigo-60)" />
      <User size={32} weight="bold" />
    </div>
  );
}
```

### В компонентах Button

```tsx
import { Button } from '@local-ui/button';
import { ArrowRight, Check, Plus } from '@local-ui/design-system/icons';

function Actions() {
  return (
    <>
      <Button icon={<ArrowRight size={20} />}>
        Next
      </Button>

      <Button
        icon={<Check size={18} />}
        iconPosition="left"
        rlType="primary"
      >
        Confirm
      </Button>

      <Button icon={<Plus />} rlType="secondary">
        Add Item
      </Button>
    </>
  );
}
```

### В Input компонентах

```tsx
import { Input } from '@local-ui/input';
import { MagnifyingGlass, Eye, EyeSlash } from '@local-ui/design-system/icons';

function SearchInput() {
  return (
    <Input
      prefix={<MagnifyingGlass size={16} />}
      placeholder="Search..."
    />
  );
}

function PasswordInput() {
  const [visible, setVisible] = useState(false);

  return (
    <Input
      type={visible ? 'text' : 'password'}
      suffix={
        <button onClick={() => setVisible(!visible)}>
          {visible ? <EyeSlash size={16} /> : <Eye size={16} />}
        </button>
      }
    />
  );
}
```

### Кастомизация

```tsx
import { Warning } from '@local-ui/design-system/icons';

<Warning
  size={24}                              // Размер
  color="var(--rl-color-error-60)"      // Цвет
  weight="bold"                          // Толщина
  className="custom-icon"                // CSS класс
  style={{ marginRight: '8px' }}        // Inline стили
/>
```

### Доступные props

```typescript
interface IconProps {
  size?: number | string;      // default: 32
  color?: string;              // default: "currentColor"
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'; // default: "regular"
  mirrored?: boolean;          // default: false
  className?: string;
  style?: React.CSSProperties;
}
```

## Список доступных иконок

### Arrows & Navigation (8)
```tsx
ArrowRight, ArrowLeft, ArrowUp, ArrowDown
CaretRight, CaretLeft, CaretUp, CaretDown
```

### Common Actions (8)
```tsx
MagnifyingGlass, X, Plus, Minus
Check, Warning, Info, Question
```

### Interface (9)
```tsx
DotsThree, DotsThreeVertical, List, Gear
Bell, Calendar, Clock, Eye, EyeSlash
```

### User & Account (5)
```tsx
User, UserCircle, Users
SignIn, SignOut
```

### Files & Documents (7)
```tsx
File, FileText, Folder, FolderOpen
Download, Upload, Paperclip
```

### Communication (4)
```tsx
Envelope, EnvelopeOpen
ChatCircle, Phone
```

### Media (4)
```tsx
Image, Camera
Play, Pause
```

### Edit (4)
```tsx
Pencil, PencilSimple
Trash, Copy
```

### Navigation (3)
```tsx
House, MapPin, Compass
```

**Всего: 52 иконки**

## Добавление новой иконки

Если вам нужна иконка, которой нет в списке:

1. Найдите иконку на [phosphoricons.com](https://phosphoricons.com/)
2. Создайте issue в репозитории с обоснованием
3. После одобрения добавьте в `src/icons/index.ts`:

```typescript
export {
  // ... existing icons
  YourNewIcon,
} from '@phosphor-icons/react';
```

4. Обновите список в `README.md` и `ICONS.md`
5. Пересоберите пакет: `pnpm run build`

## TypeScript

Все иконки полностью типизированы:

```typescript
import type { Icon, IconProps, IconWeight } from '@local-ui/design-system/icons';

// IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
// IconProps = полный интерфейс с size, color, weight и т.д.
```

## Best Practices

✅ **DO**: Используйте CSS переменные для цвета
```tsx
<Check color="var(--rl-color-success-60)" />
```

✅ **DO**: Используйте правильный размер для контекста
```tsx
<Button icon={<Plus size={20} />} />  // В кнопках: 16-20px
<Avatar icon={<User size={32} />} />  // В крупных элементах: 24-32px
```

✅ **DO**: Используйте weight для акцента
```tsx
<ArrowRight weight="bold" />  // Для активных элементов
<Info weight="light" />       // Для вторичных элементов
```

❌ **DON'T**: Не импортируйте напрямую из @phosphor-icons/react
```tsx
// ❌ Плохо
import { ArrowRight } from '@phosphor-icons/react';

// ✅ Хорошо
import { ArrowRight } from '@local-ui/design-system/icons';
```

❌ **DON'T**: Не используйте хардкод цветов
```tsx
// ❌ Плохо
<Check color="#00FF00" />

// ✅ Хорошо
<Check color="var(--rl-color-success-60)" />
```

## FAQ

**Q: Почему не все иконки из Phosphor доступны?**
A: Мы поддерживаем только кураторский набор для консистентности дизайн-системы. Если нужна новая иконка - создайте issue.

**Q: Можно ли использовать @phosphor-icons/react напрямую?**
A: Технически да, но это нарушает концепцию дизайн-системы. Лучше добавить нужную иконку в whitelist.

**Q: Как иконки попадают в bundle?**
A: Благодаря tree-shaking, в финальный bundle попадают только те иконки, которые вы импортируете.

**Q: Почему иконки не отображаются?**
A: Убедитесь что установлен пакет `@local-ui/design-system` и React >= 18.
