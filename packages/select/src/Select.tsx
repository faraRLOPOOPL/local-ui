import { Select as AntSelect, type SelectProps as AntSelectProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { cx } from '../../utils/cx';

export type RLSelectProps<ValueType = any> = Omit<
  AntSelectProps<ValueType>,
  'size' | 'status' | 'suffixIcon'
> & {
  /** ширина в пикселях (число) или строкой ('320px'). Игнорируется, если fullWidth=true */
  width?: number | string;
  /** true — растянуть на 100% контейнера */
  fullWidth?: boolean;
};

function computeWidth(width?: number | string, fullWidth?: boolean): React.CSSProperties {
  if (fullWidth) return { width: '100%' };
  if (typeof width === 'number') return { width: `${width}px` };
  if (typeof width === 'string') return { width };
  return { width: 'auto' };
}

export function Select<ValueType = any>({
  className,
  width,
  fullWidth,
  style,
  suffixIcon,
  disabled,
  ...rest
}: RLSelectProps<ValueType>) {
  return (
    <AntSelect<ValueType>
      {...rest}
      // берём готовую высоту у AntD — large (≈48px), стрелка внутри по умолчанию
      size="large"
      disabled={disabled}
      // ширина управляется инлайном — перебивает width:100% у AntD
      style={{ ...computeWidth(width, fullWidth), ...(style || {}) }}
      // просто добавляем утилиты отображения (w-auto / w-full)
      className={cx(
        fullWidth ? 'rl-block rl-w-full' : 'rl-inline-block rl-w-auto',
        className
      )}
      // стандартная антовская стрелка справа
      suffixIcon={suffixIcon ?? <DownOutlined />}
      dropdownMatchSelectWidth={true}
    />
  );
}

export default Select;
