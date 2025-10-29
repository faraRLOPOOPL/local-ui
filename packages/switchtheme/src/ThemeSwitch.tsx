import React, { useState } from 'react';
import { Switch as AntSwitch, type SwitchProps as AntSwitchProps } from 'antd';
import { SunFilled, MoonFilled } from '@ant-design/icons';

// надёжный тип рефа, чтобы vite-plugin-dts не падал
type AntSwitchRef = React.ElementRef<typeof AntSwitch>;

export type RLSwitchThemeSize = 'xs' | 's' | 'm';

export type RLSwitchThemeProps = Omit<
  AntSwitchProps,
  'size' | 'checkedChildren' | 'unCheckedChildren' | 'rootClassName'
> & {
  /** Размер: xs | s | m — всё масштабируется синхронно */
  sizeDs?: RLSwitchThemeSize;
};

const SIZE: Record<RLSwitchThemeSize, { antd: 'small' | 'default'; scale: string }> = {
  xs: { antd: 'small',   scale: 'rl-scale-90'  },
  s:  { antd: 'small',   scale: 'rl-scale-100' },
  m:  { antd: 'default', scale: 'rl-scale-110' }
};

const cx = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(' ');

/**
 * SwitchTheme — AntD Switch «в обёртке».
 * - checked (солнце):   фон трека Indigo/indigo-70, иконка Sun — Neutral/neutral-20
 * - unchecked (луна):   фон трека Neutral/neutral-50, иконка Moon — Neutral/neutral-20
 * tailwind.css: только `@tailwind utilities` — все стили через утилиты + inline backgroundColor.
 */
export const ThemeSwitch = React.forwardRef<AntSwitchRef, RLSwitchThemeProps>(function ThemeSwitch(
  { sizeDs = 's', checked, defaultChecked, disabled, onChange, className, ...rest }, ref
) {
  // поддержка неконтролируемого режима (чтобы бэкграунд менялся без внешнего состояния)
  const [inner, setInner] = useState<boolean>(!!defaultChecked);
  const controlled = typeof checked === 'boolean';
  const on = controlled ? (checked as boolean) : inner;

  const sz = SIZE[sizeDs];
  const trackBg = on ? 'var(--rl-color-indigo-70)' : 'var(--rl-color-neutral-50)';

  const handleChange: AntSwitchProps['onChange'] = (val, ev) => {
    if (!controlled) setInner(val);
    onChange?.(val, ev);
  };

  return (
    <AntSwitch
      {...rest}
      ref={ref}
      size={sz.antd}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={handleChange}
      // иконки ант
      checkedChildren={<SunFilled className="rl-text-neutral-00" />}
      unCheckedChildren={<MoonFilled className="rl-text-neutral-20" />}

      style={{ backgroundColor: trackBg }}
    />
  );
});
ThemeSwitch.displayName = 'RLSwitchTheme';
