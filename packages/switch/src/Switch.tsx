import React from 'react';
import { Switch as AntSwitch, type SwitchProps as AntSwitchProps } from 'antd';
import { SunOutlined } from '@ant-design/icons';
import { cx } from '../../utils/cx';

type RLSwitchBase = Omit<AntSwitchProps, 'size' | 'checkedChildren' | 'unCheckedChildren'>;

export type RLSwitchProps = RLSwitchBase & {
  /** Иконка при ON (по умолчанию SunOutlined) */
  checkedIcon?: React.ReactNode;
  /** Иконка при OFF (по умолчанию SunOutlined с меньшей яркостью) */
  uncheckedIcon?: React.ReactNode;
  /** Ширина: число (px) или строка ('320px'); при fullWidth игнорируется */
  width?: number | string;
  /** true — на 100% контейнера */
  fullWidth?: boolean;
  /** Цвет трека ON (CSS-цвет или токен), по умолчанию var(--rl-blue-a) */
  onBg?: string;
  /** Цвет трека OFF (CSS-цвет или токен), по умолчанию var(--rl-gray-d) */
  offBg?: string;
  /** Цвет трека в disabled, по умолчанию var(--rl-gray-soft) */
  disabledBg?: string;
};

function computeWidth(width?: number | string, fullWidth?: boolean): React.CSSProperties {
  if (fullWidth) return { width: '100%' };
  if (typeof width === 'number') return { width: `${width}px` };
  if (typeof width === 'string') return { width };
  return { width: 'auto' };
}

export const Switch: React.FC<RLSwitchProps> = ({
  className,
  style,
  checked,
  defaultChecked,
  onChange,
  disabled,
  width,
  fullWidth,
  checkedIcon,
  uncheckedIcon,
  onBg = 'var(--rl-blue-a)',
  offBg = 'var(--rl-gray-d)',
  disabledBg = 'var(--rl-gray-soft)',
  ...rest
}) => {
  // поддерживаем и контролируемый, и неконтролируемый режимы
  const isControlled = typeof checked === 'boolean';
  const [inner, setInner] = React.useState<boolean>(defaultChecked ?? false);
  const currentChecked = isControlled ? (checked as boolean) : inner;

  const handleChange: AntSwitchProps['onChange'] = (next, e) => {
    if (!isControlled) setInner(next);
    onChange?.(next, e);
  };

  const bg = disabled ? disabledBg : currentChecked ? onBg : offBg;

  return (
    <AntSwitch
      {...rest}
      checked={currentChecked}
      onChange={handleChange}
      disabled={disabled}
      // width: inline — надёжно перебивает width:100% у AntD
      style={{ ...computeWidth(width, fullWidth), backgroundColor: bg, ...(style || {}) }}
      // базовые утилиты отображения и плавности
      className={cx(
        'rl-rounded-full rl-transition-colors rl-duration-150',
        fullWidth ? 'rl-block rl-w-full' : 'rl-inline-block rl-w-auto',
        className
      )}
      // иконки внутри трека
      checkedChildren={<span className="rl-text-white">{checkedIcon ?? <SunOutlined />}</span>}
      unCheckedChildren={
        <span className="rl-opacity-60 rl-text-white">{uncheckedIcon ?? <SunOutlined />}</span>
      }
    />
  );
};

export default Switch;
