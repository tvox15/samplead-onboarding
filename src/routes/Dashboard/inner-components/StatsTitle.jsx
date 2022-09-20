import React, { useState } from 'react';
import CustomCalendar from '../../../components/Calendar/CustomCalendar';
import ReactDropdown from 'react-dropdown';
import {formatDate} from '../../../utils/utils';

const StatsTitle = ({onDateRangeSelected}) => {
	const [calendar, setCalendar] = useState(false);
	const [date, setCustomDate] = useState(null);
	const [currentOption, setCurrentOption] = useState(0);

	let options = [
		{message: 'Over the past week', id: 1},
		{message: 'Over the past month', id: 2},
		{message: 'Custom Date Range', id: 3}
	];

	const handleSelectChange = e => {
		let option = options.find(o => o.message === e.value);

		setCurrentOption(option.id - 1);

		if (option && option.id === 3) {
			setCalendar(true);
			setCustomDate(null);
		}
		else {
			let daysBefore = option.id === 1 ? 7 : 30;
			let baseDateRange = {
				startDate: new Date(new Date().setDate(new Date().getDate() - daysBefore)),
				endDate: new Date()
			};

			onDateRangeSelected(baseDateRange);
		}
	};

	const handleDateSelection = dateRange => {
		let formattedDate = `${formatDate(dateRange.startDate, true)} - ${formatDate(dateRange.endDate, true)}`;
		setCustomDate(formattedDate);
		setCalendar(false);
		debugger;
		onDateRangeSelected(dateRange);
	};
	return (
		<>
			{calendar && (
				<CustomCalendar
					backButton={true}
					onBackButtonClick={() => setCalendar(false)}
					confirmationButton={true}
					onConfirmationButton={handleDateSelection}
				/>
			)}
			<ReactDropdown
				className="dropdown"
				options={options.map(o => o.message)}
				onChange={handleSelectChange}
				value={options[currentOption < options.length ? currentOption : 0].message}
			/>
			{date && currentOption === 2 && <p>{date}</p>}
		</>
	);
};

export default StatsTitle;
