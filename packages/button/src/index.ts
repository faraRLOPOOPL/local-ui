// ⬇️ Подключаем токены один раз из вашего UI-кита
// import '../../tokens/src/tokens.css'; // поправь путь, если у тебя другой
// ⬇️ Локальный мини-CSS, собранный tailwind'ом ТОЛЬКО для кнопки
import './tailwind.css';

export * from './Button';
export type {
  RLButtonProps,
  RLButtonSize,
  RLButtonType,
  RLButtonIconPosition,
} from './Button';
