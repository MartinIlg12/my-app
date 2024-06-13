import { Icon, useTheme } from '@ui-kitten/components';
import React from 'react';
import { styles } from '../../theme/styles';

// Definir los props del componente Icon
interface Props {
    name: string;
    color?: string;
    isWhite?: boolean;
}

export const MyIcon = ({ name, color, isWhite }: Props) => {
    // Hook para tomar los estilos del tema
    const theme = useTheme();
    
    if (isWhite) {
        color = theme['color-info-100'];
    } else if (!color) {
        color = theme['text-basic-color'];
    } else {
        color = theme[color];
    }

    return (
        <Icon
            style={styles.icon}
            fill={color}
            name={name}
        />
    );
};
