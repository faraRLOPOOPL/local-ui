import { ButtonProps } from 'antd';
import { default as default_2 } from 'react';

export declare const Button: default_2.ForwardRefExoticComponent<Omit<ButtonProps, "type" | "size" | "icon"> & {
    rlType?: RLButtonType;
    sizeDs?: RLButtonSize;
    icon?: default_2.ReactNode;
    iconPosition?: RLButtonIconPosition;
} & default_2.RefAttributes<HTMLButtonElement>>;

export declare type RLButtonIconPosition = 'none' | 'left' | 'right' | 'only';

export declare type RLButtonProps = Omit<ButtonProps, 'type' | 'size' | 'icon'> & {
    rlType?: RLButtonType;
    sizeDs?: RLButtonSize;
    icon?: default_2.ReactNode;
    iconPosition?: RLButtonIconPosition;
};

export declare type RLButtonSize = 'xl' | 'l' | 'm' | 's';

export declare type RLButtonType = 'primary' | 'secondary' | 'text' | 'success' | 'error';

export { }
