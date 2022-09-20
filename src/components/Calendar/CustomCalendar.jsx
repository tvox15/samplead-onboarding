import React, {useState} from 'react';
import {DateRange} from 'react-date-range';
import {faArrowLeft as FaArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';

import './CustomCalendar.css';

const CustomCalendar = props => {
	const { backButton, onBackButtonClick, confirmationButton, onConfirmationButton } = props;
	let daySeven = new Date().setDate(new Date().getDate() - 7);

	const [dateRange, setDateRange] = useState({
		startDate: daySeven,
		endDate: daySeven,
		key: 'selection'
	});

	const handleDateRangeChange = e => {
		const {selection} = e;

		console.log('StartDate' + selection.startDate.getDate());
		console.log('EndDate' + selection.endDate.getDay());
		setDateRange({
			startDate: selection.startDate,
			endDate: selection.endDate,
			key: selection.key
		});
	};

	const rangeColors = ['#A54CFF', '#ECDBFF', '#D9B7FF'];

	return (
		<div className="custom-date-range">
			{
				backButton &&
				<div className="back-icon" onClick={onBackButtonClick}>
					<FontAwesomeIcon icon={FaArrowLeft} size="xl" />
				</div>
			}

			<DateRange rangeColors={rangeColors} maxDate={new Date()} ranges={[dateRange]} onChange={handleDateRangeChange} />

			{
				confirmationButton &&
				<div style={{alignSelf: 'flex-end'}}>
					<Button variant="secondary" onClick={() => onConfirmationButton(dateRange)}>
						Confirm
					</Button>
				</div>
			}
		</div>
	);
};

export default CustomCalendar;
