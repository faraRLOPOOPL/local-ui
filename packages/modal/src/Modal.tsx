import { Modal as AntModal, type ModalProps as AntModalProps } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const cn = (...a: Array<string | false | null | undefined>) => a.filter(Boolean).join(' ');

export type RLModalProps = Omit<
  AntModalProps,
  'title' | 'width' | 'open' | 'mask' | 'closeIcon' | 'centered' | 'closable'
> & {
  open: boolean;
  label?: string;
  /** Ширина модалки в % от окна (vw). */
  sizePct?: number;
  /** Затемнять фон (mask). */
  stroke?: boolean;
  centered?: boolean;
  /** Показывать кнопку-крестик. По умолчанию — да. */
  showClose?: boolean;
  /** Доп.класс на «карточке» контента. */
  contentClassName?: string;
};

export const Modal: React.FC<RLModalProps> = ({
  open,
  onCancel,
  label,
  sizePct = 60,
  stroke = true,
  centered = true,
  showClose = true,
  className,
  contentClassName,
  children,
  ...antd
}) => {
  const pct = Math.max(10, Math.min(100, sizePct));
  const width = `${pct}vw`;

  return (
    <AntModal
      {...antd}
      open={open}
      onCancel={onCancel}
      width={width}
      mask={stroke}
      centered={centered}
      footer={null}
      /** переключатель крестика */
      closable={showClose}
      classNames={{
        content: 'rl-rounded-rl rl-bg-neutral-5 rl-shadow-lg',
        header: 'rl-text-center rl-border-none rl-bg-transparent rl-px-5 rl-pt-4 rl-pb-0',
        body: 'rl-p-5',
      }}
      title={
        label ? (
          <div className="rl-text-neutral-80 rl-text-xl rl-font-semibold rl-text-center">
            {label}
          </div>
        ) : null
      }
      closeIcon={
        showClose ? (
          <span className="rl-inline-flex rl-items-center rl-justify-center rl-text-neutral-60 hover:rl-text-neutral-80 rl-text-base">
            <CloseOutlined />
          </span>
        ) : null
      }
      className={className}
      rootClassName="rl-modal-root"
      modalRender={(node) => (
        <div className={cn('rl-rounded-rl rl-border rl-border-solid rl-border-neutral-20', contentClassName)}>
          {node}
        </div>
      )}
    >
      {children}
    </AntModal>
  );
};
