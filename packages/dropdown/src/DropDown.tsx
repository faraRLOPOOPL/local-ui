import React from 'react';
import './tailwind.css';

const cn = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(' ');

export interface RLDropDownMenuItem {
  key: string;
  label: string;
  caption?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export type RLDropDownProps = {
  items: RLDropDownMenuItem[];
  width?: number;
  maxHeight?: number;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

/**
 * DropDown меню с поддержкой:
 * - Основной текст (neutral-80, text2-l, font-weight 500, Rubik)
 * - Caption под текстом (neutral-60, caption1, font-weight 400)
 * - Иконки слева и справа (neutral-60)
 * - Состояния: default (white), hover (indigo-10), active (electric-10), disabled (disable-bkg)
 * - Padding: 4px 8px 6px 8px
 * - Border-bottom: 1px solid neutral-10
 */
export const DropDown = React.forwardRef<HTMLDivElement, RLDropDownProps>(function RLDropDown(
  { items, width = 200, maxHeight, trigger, open, onOpenChange },
  ref
) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const isControlled = open !== undefined;
  const actualOpen = isControlled ? open : isOpen;

  const handleToggle = () => {
    const newState = !actualOpen;
    if (!isControlled) {
      setIsOpen(newState);
    }
    onOpenChange?.(newState);
  };

  const handleItemClick = (item: RLDropDownMenuItem) => {
    if (item.disabled) return;
    item.onClick?.();
    if (!isControlled) {
      setIsOpen(false);
    }
    onOpenChange?.(false);
  };

  // Закрытие при клике вне компонента
  React.useEffect(() => {
    if (!actualOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (!isControlled) {
          setIsOpen(false);
        }
        onOpenChange?.(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [actualOpen, isControlled, onOpenChange]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  const handleItemKeyDown = (e: React.KeyboardEvent, item: RLDropDownMenuItem) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemClick(item);
    }
  };

  return (
    <div ref={dropdownRef} className="rl-relative rl-inline-block">
      <button
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="rl-border-0 rl-bg-transparent rl-p-0 rl-cursor-pointer"
        type="button"
      >
        {trigger}
      </button>

      {actualOpen && (
        <div
          ref={ref}
          className="rl-absolute rl-z-50 rl-mt-1 rl-bg-white rl-rounded-rl rl-shadow-lg rl-overflow-hidden"
          style={{
            width: `${width}px`,
            ...(maxHeight && { maxHeight: `${maxHeight}px` }),
          }}
          role="menu"
        >
          <div className="rl-overflow-y-auto" style={{ maxHeight: 'inherit' }}>
            {items.map((item, index) => (
              <div
                key={item.key}
                role="menuitem"
                tabIndex={item.disabled ? -1 : 0}
                aria-disabled={item.disabled}
                onClick={() => handleItemClick(item)}
                onKeyDown={(e) => handleItemKeyDown(e, item)}
                className={cn(
                  'rl-flex rl-items-start rl-gap-2 rl-transition-colors rl-duration-200',
                  item.disabled
                    ? 'rl-bg-disable-bkg rl-opacity-60 rl-cursor-not-allowed'
                    : 'rl-bg-white hover:rl-bg-indigo-10 active:rl-bg-electric-10 rl-cursor-pointer'
                )}
                style={{
                  padding: '4px 8px 6px 8px',
                  ...(index !== items.length - 1 && {
                    borderBottom: '1px solid var(--rl-color-neutral-10)',
                  }),
                }}
              >
                {item.iconLeft && (
                  <span className="rl-flex-shrink-0 rl-text-neutral-60 rl-pt-1" aria-hidden>
                    {item.iconLeft}
                  </span>
                )}
                <div className="rl-flex-1 rl-min-w-0">
                  <div className="rl-text-neutral-80 rl-text-text2-l rl-font-medium rl-font-rubik">
                    {item.label}
                  </div>
                  {item.caption && (
                    <div className="rl-text-neutral-60 rl-text-caption1 rl-font-normal rl-font-rubik rl-mt-0.5">
                      {item.caption}
                    </div>
                  )}
                </div>
                {item.iconRight && (
                  <span className="rl-flex-shrink-0 rl-text-neutral-60 rl-pt-1" aria-hidden>
                    {item.iconRight}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

DropDown.displayName = 'RLDropDown';
