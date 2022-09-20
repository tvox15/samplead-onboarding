import React from 'react';
import {useNavigate} from 'react-router-dom';
import CampaignCard from '../../../components/CampaignCard';
import {PATH_ALL_CAMPAIGNS} from '../../../utils/constants';
import Button, {BUTTON_VARIANT} from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import {isNullOrEmptyArray} from "../../../utils/general";

const DashboardMain = ({
	                       campaigns,
	                       handleSuggestionsClick,
	                       handleDeleteCampaign,
                       }) => {
	const navigate = useNavigate();

	const renderCampaigns = () => {
		if (isNullOrEmptyArray(campaigns)) {
			return (
				<div className='dashboard__main-cards no-campaigns'>
					<Icon type='activity-event' />
					<p className='samplead-body text-center'>
						You don't have any Campaigns yet. To create a Campaign -
						click on the “Create new campaign” button above.
					</p>
				</div>
			);
		}

		campaigns.forEach(campaign => {
			campaign.order = 0;
			if(campaign.type === 'auto-discovery') {
				campaign.order = 1;
			}
		});

		return (
			<div className={'dashboard__main-cards'}>
				{
					campaigns
						.sort((a, b) => b.order - a.order)
						.map((campaign) => {
							return (
								<CampaignCard
									key={campaign.id}
									campaign={campaign}
									onDeleteCampaign={handleDeleteCampaign}
								/>
							);
						})
				}
			</div>
		);
	};

	return (
		<main className={'dashboard__main'}>

			{
				!isNullOrEmptyArray(campaigns) &&
				<div className={'dashboard__main-top'}>
					<h6 className={'samplead-body--bold'}>Recent campaigns</h6>
					<div className={'dashboard__main-top--buttons'}>
						<Button
							variant={BUTTON_VARIANT.SECONDARY}
							onClick={() => navigate(PATH_ALL_CAMPAIGNS)}>
							All campaigns
						</Button>
					</div>
				</div>
			}

			{ renderCampaigns() }

		</main>
	);
};
export default DashboardMain;
