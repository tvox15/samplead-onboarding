import React, { useState } from "react";
//import {useDispatch} from "react-redux";
//import {Link} from "react-router-dom";
import Link from "../Router/Link";
import avatar from "../../assets/images/avatar.png";
import { logger } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { PATH_HOME } from "../../utils/constants";
import KebabMenuButton from "../Button/KebabMenuButton";
// import * as userActions from '../../redux/User/actions';
import HelpDialog from "../HelpDialog";

import "./Header.css";

const Header = props => {
	// const { user } = props;
	const { logoOnly } = props;
	const user = {
		image: {
			url: avatar,
		}
	}
	const [showHelp, setShowHelp] = useState(false);
	//const dispatch = useDispatch();

	const handleHelpClick = () => {
		logger('Help clicked in header');
		setShowHelp(true);
	};

	const onSignOut = () => {
		// handle signout
		//	dispatch(userActions.signOut());
	};

	if (logoOnly) {
		return (
			<nav className="header">
				<div className="nav-container">
					<Link href={PATH_HOME} className="nav-logo">
						{" "}
					</Link>
				</div>
			</nav>
		)
	}

	return (
		<nav className="header">
			<div className="nav-container">

				<Link href={PATH_HOME} className="nav-logo">
					{" "}
				</Link>
				{/* <Link href="/onboarding"  >
					Onboarding
				</Link>
				<Link href="/dashboard"  >
					Dashboard
				</Link> */}
				{
					process.env.REACT_APP_ENV_NAME !== 'PRODUCTION' &&
					<div style={{ color: 'red' }}>{process.env.REACT_APP_ENV_NAME.toUpperCase()}</div>
				}


				{
					user &&
					<ul className="nav-menu">
						<Link href="/settings" >
							<li className="nav-item nav-item--settings"></li>
						</Link>
						<li className="nav-item nav-item--help" onClick={handleHelpClick}>
							<HelpDialog showHelp={showHelp} setShowHelp={setShowHelp} />
						</li>
						<li className="nav-item nav-item--divider" />

						<li className="nav-item nav-item--avatar">
							<img src={user.image_url ? `${process.env.REACT_APP_BACKEND_URL}/images/users/${user.image_url}` : avatar} alt="Avatar" />
						</li>


						<li className="nav-item nav-item--avatar">
							<KebabMenuButton trigger={<FontAwesomeIcon icon={faChevronDown} size="sm" />} menuItems={[{ label: 'Sign Out', onClick: onSignOut }]} />
						</li>
					</ul>
				}
			</div>
		</nav>
	);
};

export default Header;
