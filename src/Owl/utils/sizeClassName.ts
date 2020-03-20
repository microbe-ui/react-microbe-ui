export default (size?: string, mq: string = ''): string | boolean => {
	return typeof size === 'string' ? `_${mq}owl--${size}` : false;
};
