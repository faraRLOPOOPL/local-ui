import { default as default_2 } from 'react';
import { InputProps } from 'antd';
import { InputRef } from 'antd';

export declare const Input: default_2.ForwardRefExoticComponent<Omit<InputProps, "size" | "prefix" | "suffix" | "bordered" | "className"> & {
    sizeDs?: RLInputSize;
    label?: string;
    caption?: string;
    icon?: default_2.ReactNode;
    iconPosition?: RLIconPosition;
    error?: boolean;
    width?: number | string;
    inputClassName?: string;
    className?: string;
    /** 🔹 Новое: ссылка справа сверху */
    linkText?: string;
    linkHref?: string;
} & default_2.RefAttributes<InputRef>>;

export declare type RLIconPosition = 'none' | 'left' | 'right' | 'both';

export declare type RLInputProps = Omit<InputProps, 'size' | 'prefix' | 'suffix' | 'bordered' | 'className'> & {
    sizeDs?: RLInputSize;
    label?: string;
    caption?: string;
    icon?: default_2.ReactNode;
    iconPosition?: RLIconPosition;
    error?: boolean;
    width?: number | string;
    inputClassName?: string;
    className?: string;
    /** 🔹 Новое: ссылка справа сверху */
    linkText?: string;
    linkHref?: string;
};

export declare type RLInputSize = 'l' | 'm' | 's';

export { }
