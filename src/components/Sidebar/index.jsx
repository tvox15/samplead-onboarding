import React from 'react';
import {PATH_ALL_CAMPAIGNS, PATH_DASHBOARD} from "../../utils/constants";
// import {NavLink} from "react-router-dom";
import Link from '../Router/Link';

import './Sidebar.css';

const links = [
	{
		path: PATH_DASHBOARD,
		className: "dashboard",
	},
	{
		path: PATH_ALL_CAMPAIGNS,
		className: "campaigns",
	},
];

/**
 * @param side - 'left' or 'right'
 */
const Sidebar = ({ side }) => (
	<nav className={`sidebar ${side}`}>
		<div className="sidebar-container">
			{
				links.map(({ path, className }, index) => (
					<Link
						key={index}
						href={path}
						className={`sidebar__link ${className}`}
					/>
				))
			}
		</div>
	</nav>
);

export default Sidebar;
