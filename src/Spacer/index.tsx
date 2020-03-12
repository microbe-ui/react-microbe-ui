// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import * as React from 'react';
import { TSize } from '../models/TSpace';
import { TRootAttributes, TRootComponent } from '../models/TRootElement';

// -----------------------------------------------------------------------------
// Spacer Component
// -----------------------------------------------------------------------------

export interface ISpacerProps extends React.HTMLAttributes<TRootAttributes> {
	size?: TSize;
	component?: TRootComponent;
	xxsSize?: TSize;
	xsSize?: TSize;
	smSize?: TSize;
	mdSize?: TSize;
	dfSize?: TSize;
	lgSize?: TSize;
	xlSize?: TSize;
	xxlSize?: TSize;
	hdSize?: TSize;
}

const sizeClassName = (size?: TSize, mq: string = ''): string | boolean => {
	return typeof size === 'string' ? `_${mq}spacer--${size}` : false;
};

export const Spacer: React.FC<ISpacerProps> = ({
	size,
	xxsSize,
	xsSize,
	smSize,
	mdSize,
	dfSize,
	lgSize,
	xlSize,
	xxlSize,
	hdSize,
	className,
	component = 'div',
	children
}) => {
	return React.createElement(
		component,
		{
			// ...htmlProps,
			classNames: [
				'_spacer',
				sizeClassName(size),
				sizeClassName(xxsSize, 'xxs:'),
				sizeClassName(xsSize, 'xs:'),
				sizeClassName(smSize, 'sm:'),
				sizeClassName(mdSize, 'md:'),
				sizeClassName(dfSize, 'df:'),
				sizeClassName(lgSize, 'lg:'),
				sizeClassName(xlSize, 'xl:'),
				sizeClassName(xxlSize, 'xxl:'),
				sizeClassName(hdSize, 'hd:'),
				className
			]
				.filter(Boolean)
				.join(' ')
		},
		children
	);
};
