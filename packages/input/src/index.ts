// Локальный Tailwind-CSS этого пакета
import './tailwind.css';

// Токены не импортируем — они глобальные для приложения/сторибука:
// import '@realist-ui/tokens/style.css';

export * from './Input';
export type { RLInputProps, RLInputSize, RLIconPosition } from './Input';
