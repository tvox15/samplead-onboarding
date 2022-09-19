export const logger = txt => {
	if (process.env.NODE_ENV === 'development') {
		console.log(txt);
	}
};

export const isDevelopment = () => process.env.NODE_ENV === 'development';

export const hashCode = str => {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		let char = str.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
};

export const formatDate = (date, pad) => {
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	if (pad) {
		if (day < 10) day = '0' + day;
		if (month < 10) month = '0' + month;
	}

	return `${day}/${month}/${year}`;
};

export const validate_email = (email) => {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}

export const remove_or_add_from_array = (array, value) => {
    // if inside array, remove it
    if (array.includes(value)) {
        return array.filter((item) => item !== value);
    }
    // else add it
    else {
        return [...array, value];
    }
}