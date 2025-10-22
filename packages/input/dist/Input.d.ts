import { default as React } from 'react';
import { InputProps as AntInputProps } from 'antd';
type RLVariant = 'blue' | 'red' | 'green';
type RLTone = 'a' | 'b' | 'c' | 'd';
type RLSize = 'sm' | 'md' | 'lg';
export type InputProps = Omit<AntInputProps, 'size' | 'status'> & {
    sizeDs?: RLSize;
    rlVariant?: RLVariant;
    /** на случай, если хочешь выбрать подцвет базового семейства */
    tone?: RLTone;
    fullWidth?: boolean;
};
export declare const Input: React.ForwardRefExoticComponent<Omit<AntInputProps, "size" | "status"> & {
    sizeDs?: RLSize;
    rlVariant?: RLVariant;
    /** на случай, если хочешь выбрать подцвет базового семейства */
    tone?: RLTone;
    fullWidth?: boolean;
} & React.RefAttributes<HTMLInputElement>>;
export {};
