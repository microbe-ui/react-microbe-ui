export default (col?: number | 'auto', mq: string = ''): string | boolean => {
	return typeof col === 'number' || col === 'auto'
		? `_${mq}module-grid--${col}`
		: false;
};
