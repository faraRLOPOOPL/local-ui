import React from 'react';
import { Button as AntButton, type ButtonProps as AntButtonProps } from 'antd';

const cn = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(' ');

export type RLButtonType = 'primary' | 'secondary' | 'text' | 'success' | 'error';
export type RLButtonSize = 'xl' | 'l' | 'm' | 's';
export type RLButtonIconPosition = 'none' | 'left' | 'right' | 'only';

export type RLButtonProps = Omit<AntButtonProps, 'type' | 'size' | 'icon'> & {
  rlType?: RLButtonType;
  sizeDs?: RLButtonSize;
  icon?: React.ReactNode;
  iconPosition?: RLButtonIconPosition;
};

/** размеры:
 * xl: h-56/px-32, l: h-48/px-24, m: h-40/px-16, s: h-32/px-12; радиус 12px
 */
const SIZE: Record<RLButtonSize, { base: string; only: string; icon: string; text: string }> = {
  xl: { base: 'rl-h-14 rl-px-8 rl-rounded-rl', only: 'rl-h-14 rl-w-14 rl-p-0 rl-rounded-rl', icon: 'rl-text-lg',  text: 'rl-text-btn1' },
  l:  { base: 'rl-h-12 rl-px-6 rl-rounded-rl', only: 'rl-h-12 rl-w-12 rl-p-0 rl-rounded-rl', icon: 'rl-text-base', text: 'rl-text-btn1' },
  m:  { base: 'rl-h-10 rl-px-4 rl-rounded-rl', only: 'rl-h-10 rl-w-10 rl-p-0 rl-rounded-rl', icon: 'rl-text-sm',  text: 'rl-text-btn2' },
  s:  { base: 'rl-h-8  rl-px-3 rl-rounded-rl', only: 'rl-h-8  rl-w-8  rl-p-0 rl-rounded-rl', icon: 'rl-text-xs',  text: 'rl-text-btn2' },
};

// Общие сбросы визуальных эффектов AntD
const COMMON =
  'rl-inline-flex rl-items-center rl-justify-center rl-font-medium rl-leading-none rl-select-none rl-whitespace-nowrap rl-align-middle ' +
  'rl-shadow-none hover:rl-shadow-none active:rl-shadow-none focus:rl-shadow-none focus-visible:rl-shadow-none ' +
  'focus:rl-ring-0 focus-visible:rl-ring-0 rl-outline-none focus:rl-outline-none focus-visible:rl-outline-none ' +
  'active:rl-translate-y-0';

// Варианты (у всех, кроме secondary, бордеров нет)
const VARIANT: Record<RLButtonType, string> = {
  primary:  'rl-bg-indigo-60 rl-text-staticwhite-10 rl-border-0 hover:rl-bg-indigo-70 active:rl-bg-indigo-80 disabled:rl-bg-neutral-15 disabled:rl-text-neutral-50',
  secondary:'rl-bg-neutral-0 rl-text-indigo-60 rl-border rl-border-indigo-40 hover:rl-bg-neutral-5 hover:rl-border-indigo-50 active:rl-bg-neutral-10 active:rl-border-indigo-60 disabled:rl-text-neutral-50 disabled:rl-border-neutral-20 disabled:rl-bg-neutral-10',
  text:     'rl-bg-transparent rl-text-indigo-60 rl-border-0 hover:rl-bg-indigo-10 active:rl-bg-indigo-20 disabled:rl-text-neutral-40',
  success:  'rl-bg-success-60 rl-text-staticwhite-10 rl-border-0 hover:rl-bg-success-70 active:rl-bg-success-80 disabled:rl-bg-neutral-15 disabled:rl-text-neutral-50',
  error:    'rl-bg-error-60 rl-text-staticwhite-10 rl-border-0 hover:rl-bg-error-70 active:rl-bg-error-80 disabled:rl-bg-neutral-15 disabled:rl-text-neutral-50',
};

export const Button = React.forwardRef<HTMLButtonElement, RLButtonProps>(function RLButton(
  { rlType = 'primary', sizeDs = 'm', icon, iconPosition = 'none', className, children, disabled, ...antd }, ref
) {
  const sz = SIZE[sizeDs];

  // у всех, кроме secondary, используем AntD type="text", чтобы не прилетал их outlined/default
  const antType: AntButtonProps['type'] = rlType === 'secondary' ? 'default' : 'text';

  const left  = iconPosition === 'left'  && icon;
  const right = iconPosition === 'right' && icon;
  const only  = iconPosition === 'only'  && icon;

  const content = only ? (
    <span className={cn('rl-flex rl-items-center rl-justify-center', sz.icon)} aria-hidden>{icon}</span>
  ) : (
    <span className={cn('rl-inline-flex rl-items-center', sz.text)}>
      {left  && <span className={cn('rl-mr-2', sz.icon)} aria-hidden>{icon}</span>}
      <span>{children}</span>
      {right && <span className={cn('rl-ml-2', sz.icon)} aria-hidden>{icon}</span>}
    </span>
  );

  return (
    <AntButton
      {...antd}
      ref={ref}
      type={antType}
      className={cn(COMMON, sz.base, only && sz.only, VARIANT[rlType], className)}
      disabled={disabled}
    >
      {content}
    </AntButton>
  );
});
Button.displayName = 'RLButton';
