import React, { useRef, useCallback } from 'react';
import { Input, type RLInputProps } from './Input';
import { MagnifyingGlass } from '@realist-ui/design-system/icons';
import type { InputRef } from 'antd';

const cn = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(' ');

export type RLSearchProps = Omit<RLInputProps, 'icon' | 'iconPosition'>;

/**
 * Search Input - обертка над Input с полностью скругленными углами и иконкой поиска
 *
 * Стили (управляются через CSS):
 * - default: text=neutral-50, border=neutral-50, icon=neutral-60
 * - focus: text=neutral-80, border=electric-50, icon=neutral-60
 * - has-value (after blur/Enter): text=neutral-80, border=neutral-50, icon=indigo-60
 */
export const Search = React.forwardRef<InputRef, RLSearchProps>(function RLSearch(
  {
    className,
    inputClassName,
    onKeyDown,
    style,
    ...props
  },
  ref
) {
  const inputRef = useRef<InputRef>(null);

  // Combine refs
  const combinedRef = useCallback((node: InputRef | null) => {
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
    inputRef.current = node;
  }, [ref]);

  // Handle Enter key - blur the input to show "searched" state
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Blur to trigger has-value state (indigo icon)
      inputRef.current?.blur();
    }
    onKeyDown?.(e);
  }, [onKeyDown]);

  return (
    <Input
      {...props}
      ref={combinedRef}
      icon={<MagnifyingGlass size={20} weight="regular" />}
      iconPosition="left"
      onKeyDown={handleKeyDown}
      className={cn(
        // Full rounded corners - using [&&] to increase specificity
        '[&&]:!rl-rounded-[9999px]',
        // Default border color
        'rl-border-neutral-50',
        // Focus state: electric border
        'focus-within:rl-border-electric-50',
        // Icon color: neutral-60 by default
        '[&_.rl-icon]:rl-text-neutral-60',
        // Icon color when has value AND not focused: indigo-60
        '[&:not(:focus-within):has(input:not(:placeholder-shown))_.rl-icon]:rl-text-indigo-60',
        className
      )}
      style={style}
      inputClassName={cn(
        // Default text color
        'rl-text-neutral-50',
        // Text color when focused or has value
        'focus:rl-text-neutral-80',
        '[&:not(:placeholder-shown)]:rl-text-neutral-80',
        // Placeholder
        'placeholder:rl-text-neutral-50',
        inputClassName
      )}
    />
  );
});

Search.displayName = 'RLSearch';
