import React from 'react';
import './tailwind.css';

const cn = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(' ');

// ========== TabButton ==========
export interface TabButtonProps {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * TabButton компонент
 * - Padding: 8px 24px
 * - Border-radius: 8px
 * - Font-size: text2-l (14px), line-height: text1-s (20px)
 * - Default: прозрачный фон, neutral-60, font-weight 400
 * - Hover: indigo-10 фон, neutral-70
 * - Active: modalbkgw-10 фон, indigo-60, font-weight 500
 * - Disabled: прозрачный фон, neutral-30
 */
export const TabButton = React.forwardRef<HTMLButtonElement, TabButtonProps>(
  function TabButton({ children, active = false, disabled = false, onClick }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={cn(
          'rl-px-6 rl-py-2 rl-rounded-lg rl-transition-colors rl-duration-200 rl-font-rubik',
          'rl-border-0 rl-cursor-pointer',
          disabled
            ? 'rl-bg-transparent rl-text-neutral-30 rl-cursor-not-allowed'
            : active
            ? 'rl-bg-modalbkgw-10 rl-text-indigo-60 rl-font-medium'
            : 'rl-bg-transparent rl-text-neutral-60 rl-font-normal hover:rl-bg-indigo-10 hover:rl-text-neutral-70'
        )}
        style={{
          fontSize: 'var(--rl-font-size-text2-l)',
          lineHeight: 'var(--rl-line-text1-s)',
        }}
      >
        {children}
      </button>
    );
  }
);

TabButton.displayName = 'TabButton';

// ========== TabsMenu ==========
export interface TabsMenuProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * TabsMenu - контейнер для TabButton
 * - Gap между кнопками: 8px
 * - Padding контейнера: 4px
 * - Background: disable-bkg
 */
export const TabsMenu = React.forwardRef<HTMLDivElement, TabsMenuProps>(
  function TabsMenu({ children, className }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'rl-inline-flex rl-gap-2 rl-p-1 rl-bg-disable-bkg rl-rounded-lg',
          className
        )}
      >
        {children}
      </div>
    );
  }
);

TabsMenu.displayName = 'TabsMenu';