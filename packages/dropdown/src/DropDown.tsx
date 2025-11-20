import React from 'react';
import { Dropdown as AntDropdown, type DropdownProps as AntDropdownProps } from 'antd';

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

export interface RLDropDownProps extends Omit<AntDropdownProps, 'menu' | 'dropdownRender' | 'trigger'> {
  items: RLDropDownMenuItem[];
  trigger?: React.ReactNode;
  width?: number | string;
  maxHeight?: number | string;
}

const DropDownItem: React.FC<{ item: RLDropDownMenuItem }> = ({ item }) => {
  const handleClick = () => {
    if (!item.disabled && item.onClick) {
      item.onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!item.disabled && item.onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      item.onClick();
    }
  };

  return (
    <div
      role="menuitem"
      tabIndex={item.disabled ? -1 : 0}
      className={cn(
        'rl-flex rl-items-start rl-gap-2 rl-cursor-pointer rl-transition-colors',
        item.disabled
          ? 'rl-bg-disable-bkg rl-cursor-not-allowed'
          : 'rl-bg-white hover:rl-bg-indigo-10 active:rl-bg-electric-10'
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{
        padding: '4px 8px 6px 8px',
      }}
    >
      {item.iconLeft && (
        <span
          className={cn(
            'rl-flex-shrink-0 rl-mt-0.5',
            item.disabled ? 'rl-text-disable-text' : 'rl-text-neutral-60'
          )}
        >
          {item.iconLeft}
        </span>
      )}

      <div className="rl-flex-1 rl-min-w-0">
        <div
          className={cn(
            'rl-text-text2-l rl-font-medium',
            item.disabled ? 'rl-text-disable-text' : 'rl-text-neutral-80'
          )}
        >
          {item.label}
        </div>
        {item.caption && (
          <div
            className={cn(
              'rl-text-caption1 rl-font-normal rl-mt-0.5',
              item.disabled ? 'rl-text-disable-text' : 'rl-text-neutral-60'
            )}
          >
            {item.caption}
          </div>
        )}
      </div>

      {item.iconRight && (
        <span
          className={cn(
            'rl-flex-shrink-0 rl-mt-0.5',
            item.disabled ? 'rl-text-disable-text' : 'rl-text-neutral-60'
          )}
        >
          {item.iconRight}
        </span>
      )}
    </div>
  );
};

export const DropDown: React.FC<RLDropDownProps> = ({
  items,
  trigger,
  width,
  maxHeight,
  ...antdProps
}) => {
  const containerStyle: React.CSSProperties = {};

  if (width !== undefined) {
    containerStyle.width = typeof width === 'number' ? `${width}px` : width;
  }

  if (maxHeight !== undefined) {
    containerStyle.maxHeight = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;
    containerStyle.overflowY = 'auto';
  }

  const dropdownRender = () => (
    <div
      className="rl-bg-white rl-rounded-12 rl-shadow-lg rl-py-2 rl-font-rubik"
      style={containerStyle}
    >
      {items.map((item, index) => {
        const isLastItem = index === items.length - 1;

        return (
          <React.Fragment key={item.key}>
            <DropDownItem item={item} />
            {!isLastItem && (
              <div className="rl-h-px rl-bg-neutral-10" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );

  // If no trigger provided, render dropdown content directly
  if (!trigger) {
    return dropdownRender();
  }

  return (
    <AntDropdown
      {...antdProps}
      dropdownRender={dropdownRender}
      trigger={['click']}
      autoAdjustOverflow={false}
      placement="bottomLeft"
      getPopupContainer={(trigger) => trigger.parentElement || document.body}
    >
      <span className="rl-inline-block rl-cursor-pointer">
        {trigger}
      </span>
    </AntDropdown>
  );
};

DropDown.displayName = 'RLDropDown';
