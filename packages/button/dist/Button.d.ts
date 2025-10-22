import { default as React } from 'react';
import { ButtonProps as AntButtonProps } from 'antd';
export type RLButtonType = 'primary' | 'secondary' | 'text' | 'success' | 'error';
export type RLButtonSize = 'xl' | 'l' | 'm' | 's';
export type RLButtonIconPosition = 'none' | 'left' | 'right' | 'only';
export type RLButtonProps = Omit<AntButtonProps, 'type' | 'size' | 'icon'> & {
    rlType?: RLButtonType;
    sizeDs?: RLButtonSize;
    icon?: React.ReactNode;
    iconPosition?: RLButtonIconPosition;
};
export declare const Button: React.ForwardRefExoticComponent<Omit<AntButtonProps, "type" | "size" | "icon"> & {
    rlType?: RLButtonType;
    sizeDs?: RLButtonSize;
    icon?: React.ReactNode;
    iconPosition?: RLButtonIconPosition;
} & React.RefAttributes<HTMLButtonElement>>;
