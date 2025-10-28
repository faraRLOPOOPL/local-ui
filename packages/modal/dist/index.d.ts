import { default as default_2 } from 'react';
import { ModalProps } from 'antd';

export declare const Modal: default_2.FC<RLModalProps>;

export declare type RLModalProps = Omit<ModalProps, 'title' | 'width' | 'open' | 'mask' | 'closeIcon' | 'centered' | 'closable'> & {
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

export { }
