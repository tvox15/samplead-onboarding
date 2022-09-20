import React from 'react';
import { BLANK_IMAGE } from '../../utils/constants';
import { useCallback } from 'react';

import './StatsBox.css';

const StatsBox = ({ iconType, onClick }) => {
    const getClassName = useCallback(() => {
        switch (iconType) {
            case 'auto-discovery':
                return 'icon auto-discovery';
            case 'message-typing':
                return 'icon message-typing';
            case 'export':
                return 'icon export';
            case 'manual':
                return 'icon manual';
            case 'empty':
                return 'icon empty';
            case 'empty-stats':
                return 'icon empty-stats';
            default:
                return `icon ${iconType}`;
        }
    }, [iconType]);

    return (
        <div className="right-box-statistics-box">
            <img
                alt={iconType}
                className={getClassName()}
                onClick={onClick}
            />
        </div>
    );
};

export default StatsBox;
