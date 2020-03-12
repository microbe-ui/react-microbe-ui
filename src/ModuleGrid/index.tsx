// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import * as React from 'react';
import { TRootAttributes, TRootComponent } from '../models/TRootElement';
import { TInnerAttributes, TInnerComponent } from '../models/TInnerElement';

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
}

const colClassName = (col?: TModuleGridCol, mq: string = ''): string | boolean => {
	return typeof col === 'number' || col === 'auto'
		? `_${mq}module-grid--${col}`
		: false;
};

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
	className,
	component = 'div',
	children,
	...htmlProps
}) => {
	return React.createElement(
		component,
		{
			...htmlProps,
			classNames: [
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

const spanClassName = (span?: TModuleCellSpan, mq: string = ''): string | boolean => {
	return typeof span === 'number' || span === 'auto'
		? `_${mq}module-cell--${span}`
		: false;
};

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
			classNames: [
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
