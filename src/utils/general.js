const log = require("loglevel").getLogger("General");
log.setLevel("error");

export const twoDigits = value => {
	if(value != null) {
		if(value.toString().length === 1) {
			value = ("0" + value.toString());
		}
		else if(value.toString().indexOf(".") > -1) {
			const parts = value.toString().split(".");
			if(parts[0].length === 1) {
				parts[0] = ("0" + value.toString());
			}
			value = parts.join("");
		}
	}
	return value;
};

export const readableFileSize = size => {
	const i = Math.floor( Math.log(size) / Math.log(1024) );
	return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
};

export const isNullOrEmpty = value => {
	return value == null || value === '';
};

export const arrayLengthOrZero = arr => {
	return arr == null ? 0 : arr.length;
};

export const isTrue = value => {
	return value != null && value === true;
};

export const isNullOrEmptyArray = arr => {
	return arr == null || arr.length === 0;
};

export const isNullOrZero = value => {
	return value == null || value === 0;
};

export const isNullOrFalse = value => {
	return value == null || value === false;
};

export const isSameValuesInArrays = (arr1, arr2) => {
	for(let i=0 ; i<arr1.length ; i++) {
		const value = arr1[i];
		const found = arr2.findIndex(item => item === value) > -1;

		if(!found) {
			return false;
		}
	}

	return true;
};

export const getOrdinal = num => {
	const lastDigit = num.toString().substr(-1);

	if(Number(lastDigit) === 1) {
		return `${num}st`;
	}
	else if(Number(lastDigit) === 2) {
		return `${num}nd`;
	}
	else if(Number(lastDigit) === 3) {
		return `${num}rd`;
	}

	return `${num}th`;
};

export const ordinalToInt = ord => {
	const options = [
		{int:1, str:"first", ord:"1st"},
		{int:2, str:"second", ord:"2nd"},
		{int:3, str:"third", ord:"3rd"},
		{int:4, str:"fourth", ord:"4th"},
		{int:5, str:"fifth", ord:"5th"},
		{int:6, str:"sixth", ord:"6th"},
		{int:7, str:"seventh", ord:"7th"},
		{int:8, str:"eighth", ord:"8th"},
		{int:9, str:"ninth", ord:"9th"},
		{int:10, str:"tenth", ord:"10th"},
		{int:11, str:"eleventh", ord:"11th"},
		{int:12, str:"twelfth", ord:"12th"},
		{int:13, str:"thirteenth", ord:"13th"},
		{int:14, str:"fourteenth", ord:"14th"},
		{int:15, str:"fifteenth", ord:"15th"},
		{int:16, str:"sixteenth", ord:"16th"},
		{int:17, str:"seventeenth", ord:"17th"},
		{int:18, str:"eighteenth", ord:"18th"},
		{int:19, str:"nineteenth", ord:"19th"},
		{int:20, str:"twentieth", ord:"20th"}
	];

	return options.find(o => o.str === ord.toLowerCase() || o.ord === ord.toLowerCase());
};

export const mapToObjectArray = map => {
	const arr = [];
	Object.keys(map).forEach(key => {
		const value = map[key];
		const obj = { key, value };
		arr.push(obj);
	});
	return arr;
};

export const objectArrayToMap = arr => {
	const map = [];
	arr.map(obj => map[obj.key] = obj.value);
	return map;
};

export const compareValues = (sortData, secondarySortData) => {
	const primaryProps = sortData.name.split(".");
	const primaryLen = primaryProps.length;
	const primaryOrder = sortData.desc === true ? 'desc' : 'asc';

	let secondaryProps;
	let secondaryLen;
	let secondaryOrder;

	if(secondarySortData && sortData.name !== secondarySortData.name) {
		secondaryProps = secondarySortData.name.split(".");
		secondaryLen = secondaryProps.length;
		secondaryOrder = secondarySortData.desc === true ? 'desc' : 'asc';
	}

	return function innerSort(a, b) {
		try {
			let i = 0;
			while( i < primaryLen ) { a = a[primaryProps[i]]; b = b[primaryProps[i]]; i++; }

			let varA, varB;

			if(new Date(a).isValid() && new Date(b).isValid()) {
				varA = new Date(a);
				varB = new Date(b);
			}
			else {
				varA = (typeof a === 'string') ? a.toUpperCase() : a;
				varB = (typeof b === 'string') ? b.toUpperCase() : b;
			}

			let comparison = 0;
			if (varA > varB) {
				comparison = 1;
			}
			else if (varA < varB) {
				comparison = -1;
			}
			// fields are equal, sort by secondary
			else if(secondarySortData) {
				i = 0;
				while( i < secondaryLen ) { a = a[secondaryProps[i]]; b = b[secondaryProps[i]]; i++; }

				if(new Date(a).isValid() && new Date(b).isValid()) {
					varA = new Date(a);
					varB = new Date(b);
				}
				else {
					varA = (typeof a === 'string') ? a.toUpperCase() : a;
					varB = (typeof b === 'string') ? b.toUpperCase() : b;
				}

				if (varA > varB) {
					comparison = 1;
				}
				else if (varA < varB) {
					comparison = -1;
				}

				return (
					(secondaryOrder === 'desc') ? (comparison * -1) : comparison
				);
			}

			return (
				(primaryOrder === 'desc') ? (comparison * -1) : comparison
			);
		}
		catch(e) {
			log.debug("Sorting Error:");
			log.debug(a);
			log.debug(b);
			return 0;
		}
	}
};
