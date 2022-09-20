import React, { useCallback, useState } from 'react';
import Icon from '../Icon/Icon';
import Button, { BUTTON_VARIANT } from '../Button/Button';
import Badge from '../Badge';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_CAMPAIGN_TITLE, ENTITY_NBSP, PATH_ALL_CAMPAIGNS } from '../../utils/constants';
import KebabMenuButton from '../Button/KebabMenuButton';
import ConfirmationBox from "../ConfirmationBox";
import moment from 'moment';

import './CampaignCard.css';

const CampaignCard = props => {
	const { campaign, onDeleteCampaign } = props;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState('');
//	const navigate = useNavigate();

	const handleViewClick = useCallback(() => {
	//	navigate(`${PATH_ALL_CAMPAIGNS}/${campaign.id}`);
	}, [/* navigate */, campaign.id]);

	const handleModalClose = useCallback(() => {
		setIsModalOpen(false);
		setModalType('');
	}, []);

	const handleDeleteCampaign = () => {
		setIsModalOpen(true);
		setModalType('delete');
	};

	const menuItems = [
		// {
		//   label: "Rename",
		//   onClick: onRenameClick,
		// },
		{
			label: 'Delete',
			onClick: handleDeleteCampaign
		}
	];

	const doDeleteCampaign = () => {
		setIsModalOpen(false);
		onDeleteCampaign(campaign.id);
	};

	const renderModalDialog = () => {
		switch (modalType) {
			case 'rename':
				return <div>RenameDialog</div>;//<RenameDialog title={campaignTitle} onSubmit={updateCampaignTitle} onCancel={handleModalClose} />;
			case 'delete':
				return (
					<ConfirmationBox visible={isModalOpen}
						onClose={handleModalClose}
						title="Delete"
						buttons={[
							{ title: 'Cancel', type: BUTTON_VARIANT.PRIMARY_WHITE, action: handleModalClose },
							{ title: 'Delete', type: BUTTON_VARIANT.DANGER, action: doDeleteCampaign }
						]}
						message="Are you sure you want do delete this campaigns forever?" />
				);
			default:
				break;
		}
	};

	return (
		campaign && (
			<div className="campaign-card-container">
				{campaign.suggestions && campaign.suggestions > 0 && <div className="campaign-card-suggestion">{campaign.suggestions}</div>}
				<div className="campaign-card">
					{renderModalDialog()}
					<div className="campaign-card-header">
						<Icon type={campaign.type} />
						<div className="campaign-card-title">
							<span className={'samplead-body--large'}>{campaign.title || DEFAULT_CAMPAIGN_TITLE}</span>
							<span className={'samplead-body'}>{moment(campaign.createdAt).format('MMM Do YYYY')}</span>
						</div>
						<KebabMenuButton trigger={<span className='button__content'>{ENTITY_NBSP}</span>} menuItems={menuItems} />
					</div>
					<div className="campaign-card-footer">
						<Badge type="success">{campaign.messages} messages</Badge>
						<Button variant={BUTTON_VARIANT.LINK} onClick={handleViewClick}>
							View
						</Button>
					</div>
				</div>
			</div>
		)
	);
};
export default CampaignCard;
