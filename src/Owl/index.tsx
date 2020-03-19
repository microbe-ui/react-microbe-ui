// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import * as React from 'react';
import { TSize } from '../models/TSpace';
import sizeClassName from './utils/sizeClassName';

// -----------------------------------------------------------------------------
// Owl Component
// -----------------------------------------------------------------------------

export type TOwlSize = TSize;

export interface IOwlProps {
	component?: string;
	componentProps?: React.HTMLAttributes<any>;
	size?: TOwlSize;
	xxsSize?: TOwlSize;
	xsSize?: TOwlSize;
	smSize?: TOwlSize;
	mdSize?: TOwlSize;
	dfSize?: TOwlSize;
	lgSize?: TOwlSize;
	xlSize?: TOwlSize;
	xxlSize?: TOwlSize;
	hdSize?: TOwlSize;
}

export const Owl: React.FC<IOwlProps> = ({
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
	component = 'div',
	componentProps = {},
	children
}) => {
	return React.createElement(
		component,
		{
			...componentProps,
			className: [
				'_owl',
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
				componentProps.className
			]
			.filter(Boolean)
			.join(' ')
		},
		children
	);
};
