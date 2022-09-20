import React, {useCallback, useEffect} from 'react';
import Icon from '../Icon/Icon';

import './HelpDialog.css';

const HelpDialog = ({ showHelp, setShowHelp }) => {
	const handleClickOutside = useCallback(
		(e) => {
			const target = e.target.className;
			if (!target || !target.includes('help-dialog')) {
				setShowHelp(false);
			}
		},
		[setShowHelp]
	);

	useEffect(() => {
		setTimeout(() => {
			if (showHelp) {
				document.addEventListener('click', handleClickOutside);
			} else {
				document.removeEventListener('click', handleClickOutside);
			}
		}, 0);
	}, [showHelp, handleClickOutside]);

	if (!showHelp) {
		return null;
	}

	return (
		<div className='help-dialog'>
			<Icon type='help-dialog__icon life-server-ring' />
			<p className='help-dialog__text samplead-body--large text-center break-line'>
				{`Contact us at:
                support@samplead.com`}
			</p>
		</div>
	);
};

export default HelpDialog;
