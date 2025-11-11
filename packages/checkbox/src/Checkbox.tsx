import React from 'react';
import { CheckOutlined, MinusOutlined } from '@ant-design/icons';
import './tailwind.css';

const cn = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(' ');

export type CheckboxSize = 'm' | 's';
export type CheckboxIconType = 'check' | 'minus';

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  size?: CheckboxSize;
  iconType?: CheckboxIconType;
  label?: string;
  caption?: string;
  icon?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  className?: string;
}

/**
 * Checkbox компонент
 *
 * Размеры пикера:
 * - m: 24x24px
 * - s: 20x20px
 *
 * Состояния пикера:
 * - Default: border neutral-50, bg white, border-radius 4px
 * - Hover: border indigo-60, круг opacity-05 на расстоянии 10px
 * - Active: bg indigo-60, иконка белая (галка или минус)
 * - Disabled (empty): border disable-bkg
 * - Disabled (checked): bg indigo-40, иконка staticwhite-10
 *
 * Текст:
 * - Основной: neutral-80
 * - Caption: neutral-50
 * - M size: text1-l (16px/24px), caption1 (12px/16px)
 * - S size: text2-l (14px/20px), text2-s (14px/20px)
 * - Disabled: основной - disable-text, caption - disable-bkg
 */
export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  function Checkbox(
    {
      checked = false,
      indeterminate = false,
      disabled = false,
      size = 'm',
      iconType = 'check',
      label,
      caption,
      icon,
      onChange,
      className,
    },
    ref
  ) {
    const [hovered, setHovered] = React.useState(false);
    const isChecked = indeterminate || checked;

    // Размеры чекбокса
    const pickerSize = size === 'm' ? 24 : 20;
    const iconSize = size === 'm' ? 14 : 12;

    // Определяем иконку
    const CheckIcon = indeterminate ? MinusOutlined : iconType === 'minus' ? MinusOutlined : CheckOutlined;

    return (
      <label
        ref={ref}
        className={cn(
          'rl-inline-flex rl-items-start rl-cursor-pointer rl-select-none rl-font-rubik',
          disabled && 'rl-cursor-not-allowed',
          className
        )}
        style={{ gap: '8px' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="rl-relative rl-flex-shrink-0">
          {/* Hover круг */}
          {hovered && !disabled && (
            <div
              className="rl-absolute rl-rounded-full rl-transition-opacity rl-pointer-events-none"
              style={{
                width: `${pickerSize + 4 + 20}px`,
                height: `${pickerSize + 4 + 20}px`,
                top: -11,
                left: -11,
                backgroundColor: 'var(--rl-color-opacity-05)',
              }}
            />
          )}

          {/* Чекбокс пикер */}
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.checked)}
            className="rl-sr-only"
            style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
          />
          <div
            role="presentation"
            aria-hidden="true"
            className={cn(
              'rl-relative rl-flex rl-items-center rl-justify-center rl-transition-all rl-duration-200 rl-pointer-events-none',
              disabled
                ? isChecked
                  ? 'rl-bg-indigo-40'
                  : 'rl-bg-white'
                : isChecked
                ? 'rl-bg-indigo-60'
                : 'rl-bg-white'
            )}
            style={{
              width: `${pickerSize}px`,
              height: `${pickerSize}px`,
              borderRadius: '4px',
              border: disabled
                ? isChecked
                  ? '2px solid var(--rl-color-indigo-40)'
                  : '2px solid var(--rl-color-disable-bkg)'
                : isChecked
                ? '2px solid var(--rl-color-indigo-60)'
                : hovered
                ? '2px solid var(--rl-color-indigo-60)'
                : '2px solid var(--rl-color-neutral-50)',
            }}
          >
            {isChecked && (
              <CheckIcon
                className={cn(disabled ? 'rl-text-staticwhite-10' : 'rl-text-white')}
                style={{ fontSize: `${iconSize}px`, fontWeight: 'bold', strokeWidth: 2 }}
              />
            )}
          </div>
        </div>

        {/* Текст и caption */}
        {(label || caption) && (
          <div className="rl-flex-1 rl-flex rl-flex-col">
            {label && (
              <div
                className={cn(
                  'rl-font-rubik',
                  disabled ? 'rl-text-disable-text' : 'rl-text-neutral-80'
                )}
                style={{
                  fontSize: size === 'm' ? 'var(--rl-font-size-text1-l)' : 'var(--rl-font-size-text2-l)',
                  lineHeight: size === 'm' ? 'var(--rl-line-text1-l)' : 'var(--rl-line-text1-s)',
                }}
              >
                {label}
              </div>
            )}
            {caption && (
              <div
                className={cn(
                  'rl-font-rubik',
                  disabled ? 'rl-text-disable-bkg' : 'rl-text-neutral-50'
                )}
                style={{
                  fontSize: size === 'm' ? 'var(--rl-font-size-caption1)' : 'var(--rl-font-size-text2-s)',
                  lineHeight: size === 'm' ? 'var(--rl-line-caption1)' : 'var(--rl-line-text2-s)',
                }}
              >
                {caption}
              </div>
            )}
          </div>
        )}

        {/* Иконка справа */}
        {icon && (
          <div className="rl-flex-shrink-0 rl-text-neutral-60">
            {icon}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';