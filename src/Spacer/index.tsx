// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import * as React from 'react';
import { TSize } from '../models/TSpace';
import { TRootAttributes, TRootComponent } from '../models/TRootElement';
import sizeClassName from './utils/sizeClassName';

// -----------------------------------------------------------------------------
// Spacer Component
// -----------------------------------------------------------------------------

export type TSpacerSize = TSize;

export interface ISpacerProps extends React.HTMLAttributes<TRootAttributes> {
	size?: TSpacerSize;
	component?: TRootComponent;
	xxsSize?: TSpacerSize;
	xsSize?: TSpacerSize;
	smSize?: TSpacerSize;
	mdSize?: TSpacerSize;
	dfSize?: TSpacerSize;
	lgSize?: TSpacerSize;
	xlSize?: TSpacerSize;
	xxlSize?: TSpacerSize;
	hdSize?: TSpacerSize;
}

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
			className: [
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
