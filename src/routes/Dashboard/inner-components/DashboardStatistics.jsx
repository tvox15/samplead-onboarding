import React from 'react';
import {CAMPAIGN_TYPE} from '../../../utils/constants';
import Icon from '../../../components/Icon/Icon';
import StatsTitle from './StatsTitle';

const StatsCard = ({statistics, type}) => {
	const getTitle = () => {
		switch (type) {
			case CAMPAIGN_TYPE.AUTO_DISCOVERY:
				return statistics.autoDiscoveredLeads;
			case 'message-typing':
				return statistics.messagesTailored;
			case 'export':
				return statistics.messagesExported;
			default:
				return '';
		}
	};

	const getCaption = () => {
		switch (type) {
			case CAMPAIGN_TYPE.AUTO_DISCOVERY:
				return 'New prospects discovered';
			case 'message-typing':
				return 'Tailored messages';
			case 'export':
				return 'Exported messages';
			default:
				return '';
		}
	};

	const renderComponent = () => {
		return (
			<div className={'dashboard-statistics-comp'}>
				<div className={'dashboard-statistics-comp--icon'}>
					<Icon type={type} />
				</div>
				<div className={'dashboard-statistics-comp--content'}>
					<div className={'dashboard-statistics--title'}>
						<h2 className={'samplead-title-1'}> {getTitle()}</h2>
					</div>
					<div className={'dashboard-statistics--caption'}>
						<p className={'samplead-body--bold'}>{getCaption()}</p>
					</div>
				</div>
			</div>
		);
	};

	return renderComponent();
};

const DashboardStatistics = ({isEmptyState, userStatistics, onDateRangeSelected}) => {
	if (isEmptyState) {
		return (
			<div className={'dashboard-statistics'}>
				<div className={'dashboard-statistics-components empty-stats'}>
					<Icon type="empty-stats" />
					<p className={'samplead-body text-center break-line'}>
						You don't have any activities yet! Start tailoring messages by creating a new Campaign
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className={'dashboard-statistics'}>
			<StatsTitle onDateRangeSelected={onDateRangeSelected} />
			<div className={'dashboard-statistics-components'}>
				<StatsCard statistics={userStatistics} type={'message-typing'} />
				<StatsCard statistics={userStatistics} type={CAMPAIGN_TYPE.AUTO_DISCOVERY} />
				<StatsCard statistics={userStatistics} type={'export'} />
			</div>
		</div>
	);
};

export default DashboardStatistics;
