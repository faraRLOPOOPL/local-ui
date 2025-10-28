import { default as default_2 } from 'react';
import { SwitchProps } from 'antd';

export declare type RLSwitchThemeProps = Omit<SwitchProps, 'size' | 'checkedChildren' | 'unCheckedChildren' | 'rootClassName'> & {
    /** Размер: xs | s | m — всё масштабируется синхронно */
    sizeDs?: RLSwitchThemeSize;
};

export declare type RLSwitchThemeSize = 'xs' | 's' | 'm';

/**
 * SwitchTheme — AntD Switch «в обёртке».
 * - checked (солнце):   фон трека Indigo/indigo-70, иконка Sun — Neutral/neutral-20
 * - unchecked (луна):   фон трека Neutral/neutral-50, иконка Moon — Neutral/neutral-20
 * tailwind.css: только `@tailwind utilities` — все стили через утилиты + inline backgroundColor.
 */
export declare const ThemeSwitch: default_2.ForwardRefExoticComponent<Omit<SwitchProps, "size" | "rootClassName" | "checkedChildren" | "unCheckedChildren"> & {
    /** Размер: xs | s | m — всё масштабируется синхронно */
    sizeDs?: RLSwitchThemeSize;
} & default_2.RefAttributes<HTMLButtonElement>>;

export { }
