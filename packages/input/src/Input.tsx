import React, { useId } from 'react';
import { Input as AntInput, type InputProps as AntInputProps } from 'antd';
import type { InputRef } from 'antd';

const cn = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(' ');

export type RLInputSize = 'l' | 'm' | 's';
export type RLIconPosition = 'none' | 'left' | 'right' | 'both';

export type RLInputProps = Omit<
  AntInputProps,
  'size' | 'prefix' | 'suffix' | 'bordered' | 'className'
> & {
  sizeDs?: RLInputSize;
  label?: string;
  caption?: string;
  icon?: React.ReactNode;
  iconPosition?: RLIconPosition;
  error?: boolean;
  width?: number | string;
  inputClassName?: string;
  className?: string;

  /** 🔹 Новое: ссылка справа сверху */
  linkText?: string; // если пустая строка — ссылка не рендерится
  linkHref?: string; // URL как строка
};

const SIZE: Record<RLInputSize, { wrapper: string; input: string; icon: string; gap: string }> = {
  l: { wrapper: 'rl-h-12 rl-px-4', input: 'rl-text-base', icon: 'rl-text-base', gap: 'rl-gap-2' },
  m: { wrapper: 'rl-h-10 rl-px-3', input: 'rl-text-sm',   icon: 'rl-text-sm',   gap: 'rl-gap-2' },
  s: { wrapper: 'rl-h-8  rl-px-3', input: 'rl-text-xs',   icon: 'rl-text-xs',   gap: 'rl-gap-1' },
};

export const Input = React.forwardRef<InputRef, RLInputProps>(function RLInput(
  {
    sizeDs = 'm',
    label,
    caption,
    icon,
    iconPosition = 'none',
    error = false,
    className,
    inputClassName,
    disabled,
    width,
    id,
    linkText,
    linkHref,
    ...antd
  },
  ref
) {
  const autoId = useId();
  const inputId = id ?? `rl-input-${autoId.replace(/[:]/g, '')}`;
  const captionId = caption ? `${inputId}-caption` : undefined;

  const sz = SIZE[sizeDs];
  const left  = (iconPosition === 'left'  || iconPosition === 'both') && icon;
  const right = (iconPosition === 'right' || iconPosition === 'both') && icon;

  const styleWidth =
    width === undefined ? undefined :
    typeof width === 'number' ? { width: `${width}px` } : { width };

  const hasLink =
    typeof linkText === 'string' && linkText.trim() !== '' &&
    typeof linkHref === 'string' && linkHref.trim() !== '';

  const hasTopBar = Boolean(label) || hasLink;

  return (
    <div className={cn('rl-block rl-font-rubik', width == null && 'rl-w-full')} style={styleWidth}>
      {/* top-bar: label слева, ссылка справа */}
      {hasTopBar && (
        <div className="rl-mb-1 rl-flex rl-items-center rl-justify-between">
          {label && (
            <label htmlFor={inputId} className="rl-block rl-text-neutral-80 rl-text-sm">
              {label}
            </label>
          )}

          {hasLink && (
            <a
              href={linkHref}
              className="rl-text-sm rl-no-underline rl-text-indigo-60 hover:rl-text-indigo-70 rl-underline rl-underline-offset-2"
            >
              {linkText}
            </a>
          )}
        </div>
      )}

      <div
        className={cn(
          'rl-flex rl-items-center rl-rounded-12 rl-overflow-hidden',
          disabled ? 'rl-bg-disable-bkg rl-border-0' : 'rl-bg-neutral-0 rl-border rl-border-solid',
          !disabled && (error ? 'rl-border-error-60' : 'rl-border-neutral-20'),
          !disabled && 'hover:rl-cursor-text focus-within:rl-border-2 focus-within:rl-border-electric-50 focus-within:rl-shadow-none',
          sz.wrapper, sz.gap,
          disabled && 'rl-pointer-events-none',
          className
        )}
      >
        {left && (
          <span className={cn('rl-icon rl-inline-flex rl-items-center rl-text-neutral-60', sz.icon)} aria-hidden>
            {icon}
          </span>
        )}

        <AntInput
          {...antd}
          id={inputId}
          ref={ref}
          disabled={disabled}
          bordered={false}
          className={cn(
            'rl-flex-1 rl-h-full rl-min-w-0',
            'rl-bg-transparent rl-border-0 rl-rounded-none rl-p-0',
            'rl-shadow-none focus:rl-shadow-none focus-visible:rl-shadow-none',
            'rl-outline-none focus:rl-outline-none focus-visible:rl-outline-none',
            disabled ? 'rl-text-disable-text placeholder:rl-text-disable-text' : 'rl-text-neutral-90 placeholder:rl-text-neutral-50',
            sz.input,
            inputClassName
          )}
          aria-invalid={error || undefined}
          aria-describedby={captionId}
        />

        {right && (
          <span className={cn('rl-inline-flex rl-items-center rl-text-neutral-60', sz.icon)} aria-hidden>
            {icon}
          </span>
        )}
      </div>

      {caption && (
        <div id={captionId} className={cn('rl-mt-1 rl-text-xs', error ? 'rl-text-error-60' : 'rl-text-neutral-60')}>
          {caption}
        </div>
      )}
    </div>
  );
});
Input.displayName = 'RLInput';
