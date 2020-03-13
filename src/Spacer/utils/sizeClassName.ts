export default (size?: string, mq: string = ''): string | boolean => {
	return typeof size === 'string' ? `_${mq}spacer--${size}` : false;
};
