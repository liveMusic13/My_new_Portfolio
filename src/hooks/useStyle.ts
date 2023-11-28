const useStyle = () => {
	const roadColor = (numColor: number) => {
		const style =
			numColor === 0
				? 'rgb(255, 255, 255)'
				: numColor === 1
				? 'rgb(39, 19, 37)'
				: numColor === 2
				? 'rgb(255, 218, 68)'
				: numColor === 3
				? 'rgb(44, 36, 53)'
				: numColor === 4
				? 'rgb(53, 106, 133)'
				: numColor === 5
				? 'rgb(47, 52, 54)'
				: numColor === 6
				? 'rgb(21, 26, 30)'
				: '';

		return style;
	};

	const colorText = (numColor: number) => {
		const style =
			numColor === 0 || numColor === 2
				? 'rgb(11, 11, 11)'
				: 'rgb(255, 255, 255)';

		return style;
	};

	const colorH2 = (numColor: number) => {
		const style =
			numColor === 0
				? 'rgb(229, 33, 39)'
				: numColor === 1
				? 'rgb(251, 98, 71)'
				: numColor === 2
				? 'rgb(11, 11, 11)'
				: numColor === 3
				? 'rgb(82, 190, 172)'
				: numColor === 4
				? 'rgb(106, 212, 255)'
				: numColor === 5
				? 'rgb(229, 33, 39)'
				: numColor === 6
				? 'rgb(219, 209, 183)'
				: '';

		return style;
	};
	const colorBorder = (numColor: number) => {
		const style =
			numColor === 0
				? 'rgb(11, 11, 11)'
				: numColor === 1
				? 'rgb(251, 98, 71)'
				: numColor === 2
				? 'rgb(11, 11, 11)'
				: numColor === 3
				? 'rgb(82, 190, 172)'
				: numColor === 4
				? 'rgb(106, 212, 255)'
				: numColor === 5
				? 'rgb(229, 33, 39)'
				: numColor === 6
				? 'rgb(219, 209, 183)'
				: '';

		return style;
	};

	return {
		colorH2,
		colorText,
		roadColor,
		colorBorder,
	};
};

export default useStyle;
