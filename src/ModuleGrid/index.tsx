// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import * as React from 'react';
import { TRootAttributes, TRootComponent } from '../models/TRootElement';
import { TInnerAttributes, TInnerComponent } from '../models/TInnerElement';
import { TSpacerSize } from '../Spacer';
import spacerSizeClassName from '../Spacer/utils/sizeClassName';
import colClassName from './utils/colClassName';
import spanClassName from './utils/spanClassName';

// -----------------------------------------------------------------------------
// ModuleGrid Component
// -----------------------------------------------------------------------------

export type TModuleGridCol = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IModuleGridProps extends React.HTMLAttributes<TRootAttributes> {
	component?: TRootComponent;
	cols?: TModuleGridCol;
	xxsCols?: TModuleGridCol;
	xsCols?: TModuleGridCol;
	smCols?: TModuleGridCol;
	mdCols?: TModuleGridCol;
	dfCols?: TModuleGridCol;
	lgCols?: TModuleGridCol;
	xlCols?: TModuleGridCol;
	xxlCols?: TModuleGridCol;
	hdCols?: TModuleGridCol;
	spacerSize?: TSpacerSize;
	xxsSpacerSize?: TSpacerSize;
	xsSpacerSize?: TSpacerSize;
	smSpacerSize?: TSpacerSize;
	mdSpacerSize?: TSpacerSize;
	dfSpacerSize?: TSpacerSize;
	lgSpacerSize?: TSpacerSize;
	xlSpacerSize?: TSpacerSize;
	xxlSpacerSize?: TSpacerSize;
	hdSpacerSize?: TSpacerSize;
}

export const ModuleGrid: React.FC<IModuleGridProps> = ({
	cols,
	xxsCols,
	xsCols,
	smCols,
	mdCols,
	dfCols,
	lgCols,
	xlCols,
	xxlCols,
	hdCols,
	spacerSize,
	xxsSpacerSize,
	xsSpacerSize,
	smSpacerSize,
	mdSpacerSize,
	dfSpacerSize,
	lgSpacerSize,
	xlSpacerSize,
	xxlSpacerSize,
	hdSpacerSize,
	className,
	component = 'div',
	children,
	...htmlProps
}) => {
	const spacerSizes = [
		spacerSizeClassName(spacerSize),
		spacerSizeClassName(xxsSpacerSize, 'xxs:'),
		spacerSizeClassName(xsSpacerSize, 'xs:'),
		spacerSizeClassName(smSpacerSize, 'sm:'),
		spacerSizeClassName(mdSpacerSize, 'md:'),
		spacerSizeClassName(dfSpacerSize, 'df:'),
		spacerSizeClassName(lgSpacerSize, 'lg:'),
		spacerSizeClassName(xlSpacerSize, 'xl:'),
		spacerSizeClassName(xxlSpacerSize, 'xxl:'),
		spacerSizeClassName(hdSpacerSize, 'hd:')
	].filter(Boolean).join(' ');

	return React.createElement(
		component,
		{
			...htmlProps,
			className: [
				'_module-grid',
				colClassName(cols),
				colClassName(xxsCols, 'xxs:'),
				colClassName(xsCols, 'xs:'),
				colClassName(smCols, 'sm:'),
				colClassName(mdCols, 'md:'),
				colClassName(dfCols, 'df:'),
				colClassName(lgCols, 'lg:'),
				colClassName(xlCols, 'xl:'),
				colClassName(xxlCols, 'xxl:'),
				colClassName(hdCols, 'hd:'),
				spacerSizes.length ? '_spacer ' + spacerSizes : false,
				className
			]
				.filter(Boolean)
				.join(' ')
		},
		children
	);
};

// -----------------------------------------------------------------------------
// ModuleCell Component
// -----------------------------------------------------------------------------

export type TModuleCellSpan = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IModuleCellProps extends React.HTMLAttributes<TInnerAttributes> {
	component?: TInnerComponent;
	span?: TModuleCellSpan;
	xxsSpan?: TModuleCellSpan;
	xsSpan?: TModuleCellSpan;
	smSpan?: TModuleCellSpan;
	mdSpan?: TModuleCellSpan;
	dfSpan?: TModuleCellSpan;
	lgSpan?: TModuleCellSpan;
	xlSpan?: TModuleCellSpan;
	xxlSpan?: TModuleCellSpan;
	hdSpan?: TModuleCellSpan;
}

export const ModuleCell: React.FC<IModuleCellProps> = ({
	span,
	xxsSpan,
	xsSpan,
	smSpan,
	mdSpan,
	dfSpan,
	lgSpan,
	xlSpan,
	xxlSpan,
	hdSpan,
	className,
	component = 'div',
	children,
	...htmlProps
}) => {
	return React.createElement(
		component,
		{
			...htmlProps,
			className: [
				'_module-cell',
				spanClassName(span),
				spanClassName(xxsSpan, 'xxs:'),
				spanClassName(xsSpan, 'xs:'),
				spanClassName(smSpan, 'sm:'),
				spanClassName(mdSpan, 'md:'),
				spanClassName(dfSpan, 'df:'),
				spanClassName(lgSpan, 'lg:'),
				spanClassName(xlSpan, 'xl:'),
				spanClassName(xxlSpan, 'xxl:'),
				spanClassName(hdSpan, 'hd:'),
				className
			]
				.filter(Boolean)
				.join(' ')
		},
		children
	);
};
