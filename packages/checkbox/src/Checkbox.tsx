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
 * Размеры пикера (с учетом border):
 * - m: 20x20px
 * - s: 16x16px
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
 * - M size: text1-l (font-size + line-height)
 * - S size: text2-l font-size, text1-s line-height
 * - Caption M: caption1 (12px/16px)
 * - Caption S: text2-s (14px/20px)
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
    const checkboxId = React.useId();
    const isChecked = indeterminate || checked;
    const isMedium = size === 'm';

    const CheckIcon = indeterminate ? MinusOutlined : iconType === 'minus' ? MinusOutlined : CheckOutlined;

    // M: 20x20px, S: 16x16px (ИТОГО с border 2px)
    // Внутренний размер: M: 20-4=16px, S: 16-4=12px
    const pickerSize = isMedium ? 'rl-w-[20px] rl-h-[20px]' : 'rl-w-[16px] rl-h-[16px]';

    // Круг: M: 40x40px, S: 32x32px
    // Отступ: M: (40-20)/2 = 10px, S: (32-16)/2 = 8px
    const hoverCircleSize = isMedium ? 'rl-w-10 rl-h-10' : 'rl-w-8 rl-h-8';
    const hoverCircleOffset = isMedium ? '-rl-top-2.5 -rl-left-2.5' : '-rl-top-2 -rl-left-2';

    const iconSize = isMedium ? 'rl-text-sm' : 'rl-text-xs';

    // Размеры текста
    const labelSize = isMedium ? 'rl-text-text1-l' : 'rl-text-text2-l [line-height:var(--rl-line-text1-s)]';
    const captionSize = isMedium ? 'rl-text-caption1' : 'rl-text-caption2';

    return (
      <label
        ref={ref}
        htmlFor={checkboxId}
        className={cn(
          'rl-inline-flex rl-items-start rl-gap-2 rl-cursor-pointer rl-select-none rl-font-rubik',
          disabled && 'rl-cursor-not-allowed',
          className
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Чекбокс пикер */}
        <div className="rl-relative rl-flex-shrink-0 rl-mt-0.5">
          {/* Hover круг */}
          <div
            className={cn(
              'rl-absolute rl-rounded-full rl-pointer-events-none rl-transition-opacity rl-duration-200',
              'rl-bg-opacity-05',
              hoverCircleSize,
              hoverCircleOffset,
              hovered && !disabled ? 'rl-opacity-100' : 'rl-opacity-0'
            )}
          />

          {/* Скрытый input */}
          <input
            id={checkboxId}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.checked)}
            className="rl-sr-only rl-absolute rl-opacity-0 rl-w-0 rl-h-0"
          />

          {/* Визуальный чекбокс */}
          <div
            role="presentation"
            aria-hidden="true"
            style={{
              border: disabled && isChecked ? '2px solid var(--rl-color-indigo-40)' :
                      disabled && !isChecked ? '2px solid var(--rl-color-disable-bkg)' :
                      !disabled && isChecked ? '2px solid var(--rl-color-indigo-60)' :
                      !disabled && !isChecked && hovered ? '2px solid var(--rl-color-indigo-60)' :
                      '2px solid var(--rl-color-neutral-50)'
            }}
            className={cn(
              'rl-relative rl-flex rl-items-center rl-justify-center rl-rounded rl-transition-all rl-duration-200 rl-pointer-events-none',
              pickerSize,
              // Disabled checked
              disabled && isChecked && 'rl-bg-indigo-40',
              // Disabled empty
              disabled && !isChecked && 'rl-bg-white',
              // Active (checked)
              !disabled && isChecked && 'rl-bg-indigo-60',
              // Hover
              !disabled && !isChecked && hovered && 'rl-bg-white',
              // Default
              !disabled && !isChecked && !hovered && 'rl-bg-white'
            )}
          >
            {isChecked && (
              <CheckIcon
                className={cn(
                  iconSize,
                  'rl-font-bold',
                  disabled ? 'rl-text-staticwhite-10' : 'rl-text-white'
                )}
              />
            )}
          </div>
        </div>

        {/* Текст */}
        {(label || caption) && (
          <div className="rl-flex-1 rl-flex rl-flex-col">
            {label && (
              <div
                className={cn(
                  'rl-font-rubik',
                  labelSize,
                  disabled ? 'rl-text-disable-text' : 'rl-text-neutral-80'
                )}
              >
                {label}
              </div>
            )}
            {caption && (
              <div
                className={cn(
                  'rl-font-rubik rl-font-normal',
                  captionSize,
                  disabled ? 'rl-text-disable-bkg' : 'rl-text-neutral-50'
                )}
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
