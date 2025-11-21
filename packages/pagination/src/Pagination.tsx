import type React from 'react';
import { Pagination as AntPagination, type PaginationProps as AntPaginationProps } from 'antd';
import { CaretLeft, CaretRight, DotsThree } from '@realist-ui/design-system/icons';

const cn = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(' ');

export interface RLPaginationProps extends Omit<AntPaginationProps, 'itemRender'> {
  className?: string;
  /** Показывать кнопки перехода в начало/конец (двойные стрелки) */
  showFirstLast?: boolean;
}

const buttonBaseClasses = cn(
  'rl-w-8 rl-h-8',
  'rl-inline-flex rl-flex-row rl-justify-center rl-items-center',
  'rl-rounded-8 rl-font-rubik',
  'rl-transition-colors rl-cursor-pointer',
  'rl-border-0 rl-bg-transparent',
  'hover:rl-bg-opacity-05 active:rl-bg-opacity-10'
);

const numberClasses = cn(
  buttonBaseClasses,
  'rl-text-neutral-80 rl-text-sm rl-font-normal rl-leading-5',
  'rl-border rl-border-solid rl-border-transparent',
  'hover:rl-border-transparent active:rl-border-transparent'
);

const activeNumberClasses = cn(
  buttonBaseClasses,
  'rl-text-indigo-60 rl-text-sm rl-font-medium rl-leading-5',
  'rl-border rl-border-solid rl-border-indigo-60'
);

const arrowClasses = cn(
  buttonBaseClasses,
  'rl-text-neutral-60'
);

const dotsClasses = cn(
  buttonBaseClasses,
  'rl-text-neutral-80 rl-text-sm rl-font-normal rl-leading-5'
);

export const Pagination: React.FC<RLPaginationProps> = ({
  className,
  ...antdProps
}) => {
  const itemRender = (
    page: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactNode
  ) => {
    // Предыдущая страница (одинарная стрелка влево)
    if (type === 'prev') {
      return (
        <button type="button" className={arrowClasses} aria-label="Previous page">
          <CaretLeft size={16} weight="bold" />
        </button>
      );
    }

    // Следующая страница (одинарная стрелка вправо)
    if (type === 'next') {
      return (
        <button type="button" className={arrowClasses} aria-label="Next page">
          <CaretRight size={16} weight="bold" />
        </button>
      );
    }

    // Быстрый переход назад
    if (type === 'jump-prev') {
      return (
        <button type="button" className={dotsClasses} aria-label="Jump to previous pages">
          <span className="rl-translate-y-1">
            <DotsThree size={16} weight="bold" />
          </span>
        </button>
      );
    }

    // Быстрый переход вперед
    if (type === 'jump-next') {
      return (
        <button type="button" className={dotsClasses} aria-label="Jump to next pages">
          <span className="rl-translate-y-1">
            <DotsThree size={16} weight="bold" />
          </span>
        </button>
      );
    }

    // Страница с числом
    if (type === 'page') {
      const isActive = page === antdProps.current ||
        (antdProps.current === undefined && page === antdProps.defaultCurrent);

      return (
        <button
          type="button"
          className={isActive ? activeNumberClasses : numberClasses}
          aria-current={isActive ? 'page' : undefined}
        >
          {page}
        </button>
      );
    }

    return originalElement;
  };

  return (
    <AntPagination
      {...antdProps}
      itemRender={itemRender}
      className={cn(
        'rl-pagination rl-font-rubik',
        'rl-flex rl-items-center rl-gap-1',
        className
      )}
      showSizeChanger={false}
    />
  );
};

Pagination.displayName = 'RLPagination';
