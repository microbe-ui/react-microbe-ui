export default (span?: number | 'auto', mq: string = ''): string | boolean => {
	return typeof span === 'number' || span === 'auto'
		? `_${mq}module-cell--${span}`
		: false;
};
