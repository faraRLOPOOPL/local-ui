import { default as React } from 'react';
import { SwitchProps as AntSwitchProps } from 'antd';
type RLSwitchBase = Omit<AntSwitchProps, 'size' | 'checkedChildren' | 'unCheckedChildren'>;
export type RLSwitchProps = RLSwitchBase & {
    /** Иконка при ON (по умолчанию SunOutlined) */
    checkedIcon?: React.ReactNode;
    /** Иконка при OFF (по умолчанию SunOutlined с меньшей яркостью) */
    uncheckedIcon?: React.ReactNode;
    /** Ширина: число (px) или строка ('320px'); при fullWidth игнорируется */
    width?: number | string;
    /** true — на 100% контейнера */
    fullWidth?: boolean;
    /** Цвет трека ON (CSS-цвет или токен), по умолчанию var(--rl-blue-a) */
    onBg?: string;
    /** Цвет трека OFF (CSS-цвет или токен), по умолчанию var(--rl-gray-d) */
    offBg?: string;
    /** Цвет трека в disabled, по умолчанию var(--rl-gray-soft) */
    disabledBg?: string;
};
export declare const Switch: React.FC<RLSwitchProps>;
export default Switch;
