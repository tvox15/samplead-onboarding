import React from 'react';

import './Badge.css';

const Badge = props => {
	const { onClick, children, type } = props;

    return (
        <span className={`badge ${type}`} onClick={onClick}>
            {children}
        </span>
    );
};

export default Badge;
