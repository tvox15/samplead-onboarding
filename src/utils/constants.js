export const PATH_HOME = '/';
export const PATH_ALL_CAMPAIGNS = '/campaigns';
export const PATH_NEW_CAMPAIGN = '/campaigns/new';
export const PATH_CAMPAIGN_PAGE = '/campaigns/*';
export const PATH_DASHBOARD = '/dashboard';
export const PATH_LOGIN = '/login';
export const PATH_LOGIN_CALLBACK = '/login/callback';
export const PATH_LOGOUT = '/logout';
export const PATH_CODE_VERIFY = '/codeverify';


const constants = {
	GLOBAL_ACTION_INIT_STATE: 'GLOBAL_ACTION_INIT_STATE',

	STORAGE_SIGNED_USER_KEY: "samplead-frontend-user-data",

	MENU_OPEN_CATEGORIES: "menu-open-categories",

	TOAST_TYPE_INFO: 'toast_info',
	TOAST_TYPE_SUCCESS: 'toast_success',
	TOAST_TYPE_WARN: 'toast_warn',
	TOAST_TYPE_ERROR: 'toast_error',


	MOBILE_MAX_WIDTH:767,
	TABLET_MAX_WIDTH:1024,
	LAPTOP_MAX_WIDTH:1280
};

export const BLANK_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

export default constants;

export const CAMPAIGN_TYPE = {
	AUTO_DISCOVERY: 'auto-discovery',
	MANUAL_DISCOVERY: 'manual',
	EMPTY: 'empty'
};
export const CSV_FILE_TYPE = 'text/csv';
export const EXCEL_FILE_TYPE =
	'application/vnd.ms-excel, text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

export const DEFAULT_CAMPAIGN_TITLE = 'Untitled Campaign';

export const ENTITY_NBSP = String.fromCharCode(160); //'\u00A0';

export const ENTITY_TIMES = String.fromCharCode(10006); //'\u00D7';String.fromCharCode(10006)

export const LEAD_TYPE = {
	ACTIVE: 'active',
	REMOVED: 'removed'
	// EXPORTED: 'exported',
};

export const LeadStatus = {
	Unseen: 1,
	Active: 2,
	Removed: 3
};

export const DISABLE_ERRORS = true;