import React from 'react';
import { BLANK_IMAGE } from '../../utils/constants';
import { useCallback } from 'react';

import './Icon.css';

const Icon = ({ type, onClick }) => {
    const getClassName = useCallback(() => {
        switch (type) {
            case 'activity-event':
                return 'activity-icon event';
            case 'activity-group':
                return 'activity-icon group';
            case 'activity-post':
                return 'activity-icon post';
            default:
                return `icon ${type}`;
        }
    }, [type]);

    return (
        <img
            src={BLANK_IMAGE}
            alt={type}
            className={getClassName()}
            onClick={onClick}
        />
    );
};

export default Icon;
