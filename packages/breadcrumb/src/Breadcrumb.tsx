import React, { useState } from 'react';
import { Breadcrumb as AntBreadcrumb, type BreadcrumbProps as AntBreadcrumbProps } from 'antd';

const cn = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(' ');

export type RLBreadcrumbItemType = {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export type RLBreadcrumbProps = Omit<AntBreadcrumbProps, 'items' | 'separator'> & {
  items: RLBreadcrumbItemType[];
};

/**
 * Breadcrumb компонент - обертка над Ant Design Breadcrumb
 *
 * 3 варианта:
 * 1. Иконка (20x20px) - паддинг 6px
 * 2. Текст (text2-s: 14px/20px) - паддинг 6px
 * 3. Текст + иконка (18x18px, gap 4px) - паддинг 6px
 *
 * Состояния:
 * - DEFAULT: neutral-50
 * - HOVER: neutral-60 цвет (текст при наличии), opacity-05 background, border-radius 4px
 * - ACTIVE (press): neutral-80 текст, neutral-50 иконка, без фона
 */
export const Breadcrumb = React.forwardRef<HTMLDivElement, RLBreadcrumbProps>(
  function RLBreadcrumb(props, ref) {
    const { items, ...antdProps } = props;
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const transformedItems = items.map((item, index) => {
      const hasIcon = !!item.icon;
      const hasLabel = !!item.label;
      const isActive = activeIndex === index;

      let content: React.ReactNode;

      if (!hasLabel && hasIcon) {
        // Вариант 1: Только иконка (20x20px, паддинг 6px)
        content = (
          <button
            type="button"
            onClick={() => {
              setActiveIndex(isActive ? null : index);
              item.onClick?.();
            }}
            onMouseDown={() => setActiveIndex(index)}
            onMouseUp={() => setActiveIndex(null)}
            className={cn(
              'rl-inline-flex rl-items-center rl-justify-center',
              'rl-p-1.5', // 6px паддинг
              'rl-bg-transparent rl-border-0',
              'rl-rounded-[4px]',
              'rl-transition-all rl-duration-150',
              'rl-cursor-pointer',
              isActive
                ? 'rl-text-neutral-80'
                : 'rl-text-neutral-50 hover:rl-text-neutral-60 hover:rl-bg-opacity-05'
            )}
          >
            <span className="rl-inline-flex rl-items-center rl-justify-center rl-w-5 rl-h-5">
              {item.icon}
            </span>
          </button>
        );
      } else if (hasLabel && !hasIcon) {
        // Вариант 2: Только текст (text2-s: 14px/20px, паддинг 6px)
        content = (
          <button
            type="button"
            onClick={() => {
              setActiveIndex(isActive ? null : index);
              item.onClick?.();
            }}
            onMouseDown={() => setActiveIndex(index)}
            onMouseUp={() => setActiveIndex(null)}
            className={cn(
              'rl-inline-flex rl-items-center rl-justify-center',
              'rl-p-1.5', // 6px паддинг
              'rl-text-text2-s', // text2-s: 14px/20px
              'rl-bg-transparent rl-border-0',
              'rl-rounded-[4px]',
              'rl-transition-all rl-duration-150',
              'rl-cursor-pointer',
              isActive
                ? 'rl-text-neutral-80'
                : 'rl-text-neutral-50 hover:rl-text-neutral-60 hover:rl-bg-opacity-05'
            )}
          >
            {item.label}
          </button>
        );
      } else if (hasLabel && hasIcon) {
        // Вариант 3: Текст + иконка (18x18px, gap 4px, паддинг 6px)
        content = (
          <button
            type="button"
            onClick={() => {
              setActiveIndex(isActive ? null : index);
              item.onClick?.();
            }}
            onMouseDown={() => setActiveIndex(index)}
            onMouseUp={() => setActiveIndex(null)}
            className={cn(
              'rl-inline-flex rl-items-center',
              'rl-p-1.5', // 6px паддинг
              'rl-gap-1', // 4px gap
              'rl-bg-transparent rl-border-0',
              'rl-rounded-[4px]',
              'rl-transition-all rl-duration-150',
              'rl-cursor-pointer',
              !isActive && 'hover:rl-bg-opacity-05',
              !isActive && '[&:hover>span]:rl-text-neutral-60'
            )}
          >
            <span className={cn(
              'rl-inline-flex rl-items-center rl-justify-center rl-flex-shrink-0',
              'rl-w-[18px] rl-h-[18px]',
              'rl-transition-colors rl-duration-150',
              isActive ? 'rl-text-neutral-50' : 'rl-text-neutral-50'
            )}>
              {item.icon}
            </span>
            <span className={cn(
              'rl-text-text2-s rl-whitespace-nowrap rl-transition-colors rl-duration-150',
              isActive ? 'rl-text-neutral-80' : 'rl-text-neutral-50'
            )}>
              {item.label}
            </span>
          </button>
        );
      }

      return {
        title: item.href ? <a href={item.href}>{content}</a> : content,
      };
    });

    // Разделитель - слеш (text2-s: 14px/20px, neutral-50, паддинг 6px, отцентрирован по высоте)
    const separator = (
      <span className="rl-inline-flex rl-items-center rl-justify-center rl-h-[30px] rl-text-neutral-50 rl-text-text2-s">/</span>
    );

    return (
      <div ref={ref} className="rl-inline-flex rl-items-center [&_.ant-breadcrumb]:!rl-m-0 [&_.ant-breadcrumb-separator]:!rl-m-0 [&_.ant-breadcrumb-separator]:rl-px-1.5">
        <AntBreadcrumb {...antdProps} items={transformedItems} separator={separator} />
      </div>
    );
  }
);

Breadcrumb.displayName = 'RLBreadcrumb';
