import { SelectProps as AntSelectProps } from 'antd';
export type RLSelectProps<ValueType = any> = Omit<AntSelectProps<ValueType>, 'size' | 'status' | 'suffixIcon'> & {
    /** ширина в пикселях (число) или строкой ('320px'). Игнорируется, если fullWidth=true */
    width?: number | string;
    /** true — растянуть на 100% контейнера */
    fullWidth?: boolean;
};
export declare function Select<ValueType = any>({ className, width, fullWidth, style, suffixIcon, disabled, ...rest }: RLSelectProps<ValueType>): import("react/jsx-runtime").JSX.Element;
export default Select;
