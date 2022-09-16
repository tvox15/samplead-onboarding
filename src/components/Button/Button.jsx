import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ENTITY_NBSP} from '../../utils/constants';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

import './Button.css';

export const BUTTON_VARIANT = {
	PRIMARY: 'primary',
	SECONDARY: 'secondary',
	PRIMARY_WHITE: 'primary-white',
	SECONDARY_WHITE: 'secondary-white',
	LINK: 'link',
	KEBAB_MENU: 'kebab-menu',
	DANGER: 'danger',
};

const Button = props => {
	const { variant, onClick, isDisabled, children, linkSize, notification, borderless, inline } = props;

	const getClassName = () => {
		return `button button--${variant} ${borderless ? 'borderless' : ''}`;
	};

	const renderButton = () => {
		if (variant === 'link') {
			return (
				<>
					<span className='button__text'>{children}</span>
					<FontAwesomeIcon
						icon={faChevronRight}
						size={linkSize || 'sm'}
					/>
				</>
			);
		}
		else if (variant === BUTTON_VARIANT.KEBAB_MENU) {
			return <span className='button__content'>{ENTITY_NBSP}</span>;
		}

		return <span className='button__content'>{children}</span>;
	};

	let display = {};

	if(inline) {
		display = { display: 'inline-flex' };
	}

	return (
		<div className='button__container' style={display}>
			{
				notification &&
				<div className='button__notification samplead-body--large' onClick={() => isDisabled ? {} : onClick()}>
					{notification}
				</div>
			}

			<button className={getClassName()} onClick={onClick} disabled={isDisabled}>
				{ renderButton() }
			</button>
		</div>
	);
};

export default Button;
