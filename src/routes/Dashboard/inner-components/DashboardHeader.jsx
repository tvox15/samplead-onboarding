import {useNavigate} from "react-router-dom";
import {PATH_NEW_CAMPAIGN} from "../../../utils/constants";
import Button, {BUTTON_VARIANT} from "../../../components/Button/Button";

const DashboardHeader = ({ userName }) => {
	const navigate = useNavigate();

	return (
		<div className={"dashboard__header"}>
			<div className={"dashboard__header--text"}>
				<h1 className={"samplead-title-1"}>Hi {userName}!</h1>
				<p className={"samplead-body--large"}>
					Let's start tailoring messages to your target audience.
				</p>
			</div>
			<div className={"dashboard__header--buttons"}>
				<Button variant={BUTTON_VARIANT.PRIMARY} onClick={() => navigate(PATH_NEW_CAMPAIGN)}>
					Create new campaign
				</Button>
			</div>
		</div>
	);
};

export default DashboardHeader;
