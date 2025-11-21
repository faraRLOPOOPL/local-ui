import { Tag, type TagProps } from 'antd';

const cn = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(' ');

export type RLStatusColor =
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'electric'
  | 'indigo'
  | 'lightblue'
  | 'gray';

export type RLStatusSize = 'm';

export interface RLStatusProps extends Omit<TagProps, 'color' | 'bordered'> {
  color?: RLStatusColor;
  size?: RLStatusSize;
  children: React.ReactNode;
}

const COLOR_STYLES: Record<RLStatusColor, string> = {
  green: 'rl-bg-success-20 rl-text-success-70 rl-bg-gradient-to-br rl-from-white/40 rl-to-white/0',
  yellow: 'rl-bg-attention-20 rl-text-attention-70 rl-bg-gradient-to-br rl-from-white/40 rl-to-white/0',
  orange: 'rl-bg-warning-20 rl-text-warning-60 rl-bg-gradient-to-br rl-from-white/40 rl-to-white/0',
  red: 'rl-bg-error-20 rl-text-error-40 rl-bg-gradient-to-br rl-from-white/40 rl-to-white/0',
  electric: 'rl-bg-electric-10 rl-text-electric-30 rl-bg-gradient-to-br rl-from-white/40 rl-to-white/0',
  indigo: 'rl-bg-indigo-10 rl-text-indigo-40 rl-bg-gradient-to-br rl-from-white/40 rl-to-white/0',
  lightblue: 'rl-bg-cyan-20 rl-text-cyan-50 rl-bg-gradient-to-br rl-from-white/40 rl-to-white/0',
  gray: 'rl-bg-neutral-15 rl-text-neutral-50 rl-bg-gradient-to-br rl-from-white/40 rl-to-white/0',
};

export const Status: React.FC<RLStatusProps> = ({
  color = 'gray',
  size = 'm',
  children,
  className,
  ...antdProps
}) => {
  const colorClass = COLOR_STYLES[color];

  return (
    <Tag
      {...antdProps}
      bordered={false}
      className={cn(
        'rl-inline-flex rl-flex-row rl-justify-center rl-items-center',
        'rl-rounded-4 rl-font-rubik rl-font-medium',
        'rl-text-[10px] rl-leading-3 rl-h-6',
        'rl-py-[6px] rl-px-4 rl-gap-[10px]',
        'rl-border-0',
        colorClass,
        className
      )}
    >
      {children}
    </Tag>
  );
};

Status.displayName = 'RLStatus';
