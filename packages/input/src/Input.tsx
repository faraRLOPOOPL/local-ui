import React from 'react';
import { Input as AntInput, type InputProps as AntInputProps } from 'antd';
import { cx } from '../../utils/cx';

type RLVariant = 'blue' | 'red' | 'green';     // blue=default/focus, red=error, green=success
type RLTone = 'a' | 'b' | 'c' | 'd';
type RLSize = 'sm' | 'md' | 'lg';

export type InputProps = Omit<AntInputProps, 'size' | 'status'> & {
  sizeDs?: RLSize;
  rlVariant?: RLVariant;
  /** на случай, если хочешь выбрать подцвет базового семейства */
  tone?: RLTone; // для blue доступны a|b|c|d; для red/green — a|b|c; по умолчанию 'a'
  fullWidth?: boolean;
};



const sizeCls: Record<RLSize, { root: string; text: string }> = {
  sm: { root: 'rl-h-10 rl-px-3', text: 'rl-text-sm' },   // ~40px
  md: { root: 'rl-h-12 rl-px-4', text: 'rl-text-base' }, // ~48px
  lg: { root: 'rl-h-14 rl-px-5', text: 'rl-text-lg' },   // ~56px
};

function getVariant(variant: RLVariant, tone: RLTone = 'a') {
  // нейтральная рамка по умолчанию
  const baseBorder = 'rl-border rl-border-gray-c rl-bg-white rl-text-gray-d placeholder:rl-text-gray-b';

  if (variant === 'blue') {
    // синий — нейтрально, но при :hover/:focus переходит в blue
    const t = tone ?? 'a'; // a/b/c/d
    const focusCls = `focus:rl-border-blue-${t} focus-within:rl-border-blue-${t} hover:rl-border-blue-${t}`;
    return { base: cx(baseBorder), focus: focusCls };
  }

  if (variant === 'red') {
    const t = (['a','b','c'] as RLTone[]).includes(tone) ? tone : 'a';
    // фон слегка красный + красная рамка
    return {
      base: `rl-border rl-border-red-${t} rl-bg-redtint rl-text-gray-d placeholder:rl-text-gray-b rl-rounded-md`,
      focus: `hover:rl-border-red-${t} focus:rl-border-red-${t} focus-within:rl-border-red-${t}`,
    };
  }
  // green
  const t = (['a', 'b', 'c'] as RLTone[]).includes(tone) ? tone : 'a';
  const base = `rl-border rl-border-green-${t} rl-bg-white rl-text-gray-d placeholder:rl-text-gray-b`;
  const focus = `focus:rl-border-green-${t} focus-within:rl-border-green-${t}`;
  return { base, focus };
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function RLInput(
  { className, rootClassName, sizeDs = 'md', rlVariant = 'blue', tone = 'a', fullWidth = false, disabled, ...rest },
  ref
) {
  const s = sizeCls[sizeDs];
  const v = getVariant(rlVariant, tone);

  // пояснение:
  // - rootCls вешаем через rootClassName → работает и для обычного инпута, и для affix-wrapper
  // - className идёт на сам input → задаём только типографику/placeholder
  const rootCls = cx(
    'rl-rounded-md rl-transition-colors rl-duration-150',
    s.root,
    v.base,
    v.focus,
    // fullWidth ? 'rl-block' : 'rl-inline-block',
    // fullWidth ? 'rl-w-full rl-block' : 'rl-w-auto rl-inline-block',
    disabled && 'rl-opacity-60 rl-cursor-not-allowed',
    className // поддержим старое поведение: кто-то может кидать классы сюда
  );

  const innerCls = cx('rl-bg-transparent rl-outline-none', s.text, 'placeholder:rl-text-gray-b');

  return (
    <AntInput
      {...rest}
      ref={ref}
      disabled={disabled}
    //   style={{ ...(rest.style || {}), width: fullWidth ? '100%' : 'auto' }}
      rootClassName={rootCls}
      className={innerCls}
    />
  );
});
