import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import ErrorBoundary from '../../utils/ErrorBoundary';
import {useDispatch, useSelector} from 'react-redux';
import {formatDate} from '../../utils/utils';
import DashboardStatistics from './inner-components/DashboardStatistics';
import DashboardMain from './inner-components/DashboardMain';
import DashboardHeader from './inner-components/DashboardHeader';
import * as userActions from '../../redux/User/actions';
import * as campaignActions from '../../redux/Campaign/actions';

import './Dashboard.css';
import {PATH_ALL_CAMPAIGNS} from "../../utils/constants";
import {isNullOrEmptyArray} from "../../utils/general";

function Dashboard() {
	const [isLoadingCampaigns, setIsLoadingCampaigns] = useState(true);
	const [userStatistics, setUserStatistics] = useState({});
	const user = useSelector(state => state.user.user);
	const campaignStore = useSelector(state => state.campaign);
	const lastPath = useSelector(state => state.user.lastPath);
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const fetchUserStatistics = async (sd, ed) => {
		try {
			dispatch(userActions.getUserStats(sd, ed, userStats => {
				setUserStatistics(userStats);
				console.log("userStatistics: ", userStats);
			}));
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const load = async () => {
			if(lastPath && lastPath !== location.pathname) {
				dispatch(userActions.clearLastpath());
				navigate(lastPath);
				return;
			}

			setIsLoadingCampaigns(true);
			await dispatch(campaignActions.getCampaigns(true));
			const dates = {
				startDate: formatDate(new Date(new Date().setDate(new Date().getDate() - 7))),
				endDate: formatDate(new Date())
			};

			await dispatch(userActions.getUserStats(dates.startDate, dates.endDate, userStats => {
				setUserStatistics(userStats);
				console.log("userStatistics: ", userStats);
			}));

			setIsLoadingCampaigns(false);
		};
		load();
	}, [dispatch, lastPath, location.pathname, navigate]);

	const deleteCampaign = async campaignId => {
		console.log(campaignId);
		dispatch(campaignActions.deleteCampaign(campaignId));
		dispatch(campaignActions.getCampaigns(true));
	};

	const handleDateRangeSelected = async dateRange => {
		const dates = {
			startDate: formatDate(dateRange.startDate),
			endDate: formatDate(dateRange.endDate)
		};
		await fetchUserStatistics(dates.startDate, dates.endDate);
	};

	const gotoDiscovery = id => {
		navigate(`${PATH_ALL_CAMPAIGNS}/${id}`);
	};

	const discoveryCampaign = campaignStore.recentCampaigns ? campaignStore.recentCampaigns.find(c => c.type === 'auto-discovery') : null;

	return (
		<ErrorBoundary>
			<div className={'dashboard__wrapper'}>
				<div className={'dashboard__container'}>
					<div className={'dashboard-content'}>
						{
							discoveryCampaign && discoveryCampaign.suggestions > 0 &&
							<div className={'dashboard-content-prospects-title'} onClick={() => gotoDiscovery(discoveryCampaign.id)}>
								<div className={'dashboard-content-prospects-title-left samplead-body'}>You have {discoveryCampaign.suggestions} new prospects!</div>
								<div className={'dashboard-content-prospects-title-right samplead-body'}>Watch now</div>
							</div>
						}

						<DashboardHeader userName={user.name} />

						{
							!isLoadingCampaigns && (
								<DashboardMain
									campaigns={campaignStore.recentCampaigns}
									handleDeleteCampaign={deleteCampaign}
								/>
							)
						}
					</div>
					{!isLoadingCampaigns && (
						<DashboardStatistics
							isEmptyState={isNullOrEmptyArray(campaignStore.recentCampaigns)}
							userStatistics={userStatistics}
							onDateRangeSelected={handleDateRangeSelected}
						/>
					)}
				</div>
			</div>
		</ErrorBoundary>
	);
}

export default Dashboard;
