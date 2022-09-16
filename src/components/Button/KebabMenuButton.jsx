import './Button.css';
import {useCallback, useEffect, useState} from 'react';
import {hashCode} from '../../utils/utils';

const KebabMenuButton = ({ trigger, borderless, isDisabled, menuItems }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClickOutside = useCallback(() => {
        setShowMenu(false);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (showMenu) {
                document.addEventListener('click', handleClickOutside);
            } else {
                document.removeEventListener('click', handleClickOutside);
            }
        }, 0);
    }, [showMenu, handleClickOutside]);

    const getClassName = () => {
        return `button button--kebab-menu ${borderless ? 'borderless' : ''}`;
    };

    const handleMenuItemClick = (e, item) => {
        // e.stopPropagation();
        setShowMenu(false);
        document.removeEventListener('click', handleClickOutside);
        item.onClick();
    };

    const renderButtonMenu = () => {
        if (!showMenu) {
            return null;
        }

        return (
            <div className='button__menu'>
                <ul>
                    {menuItems.map((item) => {
                        return (
                            <li
                                key={hashCode(item.label)}
                                onClick={(e) => {
                                    handleMenuItemClick(e, item);
                                }}
                            >
                                {item.label}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    return (
        <div className='button__container'>
            <button
                className={getClassName()}
                onClick={() => setShowMenu(!showMenu)}
                disabled={isDisabled}
            >
	            { trigger }
            </button>
            {renderButtonMenu()}
        </div>
    );
};

export default KebabMenuButton;
