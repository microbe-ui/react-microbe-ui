// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import * as React from 'react';

// -----------------------------------------------------------------------------
// ModuleGrid Component
// -----------------------------------------------------------------------------

export type ModuleGridCol = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ModuleGridProps
	extends React.HTMLAttributes<
		| HTMLDivElement
		| HTMLSpanElement
		| HTMLUListElement
		| HTMLOListElement
		| HTMLLIElement
	> {
	component?:
		| 'div'
		| 'span'
		| 'ul'
		| 'ol'
		| 'li'
		| 'header'
		| 'footer'
		| 'aside'
		| 'section'
		| 'main';
	cols?: ModuleGridCol;
	xxsCols?: ModuleGridCol;
	xsCols?: ModuleGridCol;
	smCols?: ModuleGridCol;
	mdCols?: ModuleGridCol;
	dfCols?: ModuleGridCol;
	lgCols?: ModuleGridCol;
	xlCols?: ModuleGridCol;
	xxlCols?: ModuleGridCol;
	hdCols?: ModuleGridCol;
}

const colClassName = (col?: ModuleGridCol, mq: string = ''): string | boolean => {
	return typeof col === 'number' || col === 'auto'
		? `_${mq}module-grid--${col}`
		: false;
};

export const ModuleGrid: React.FC<ModuleGridProps> = ({
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

export type ModuleCellSpan = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ModuleCellProps
	extends React.HTMLAttributes<
		| HTMLDivElement
		| HTMLSpanElement
		| HTMLUListElement
		| HTMLOListElement
		| HTMLLIElement
	> {
	component?:
		| 'div'
		| 'span'
		| 'ul'
		| 'ol'
		| 'li'
		| 'header'
		| 'footer'
		| 'aside'
		| 'section';
	span?: ModuleCellSpan;
	xxsSpan?: ModuleCellSpan;
	xsSpan?: ModuleCellSpan;
	smSpan?: ModuleCellSpan;
	mdSpan?: ModuleCellSpan;
	dfSpan?: ModuleCellSpan;
	lgSpan?: ModuleCellSpan;
	xlSpan?: ModuleCellSpan;
	xxlSpan?: ModuleCellSpan;
	hdSpan?: ModuleCellSpan;
}

const spanClassName = (span?: ModuleCellSpan, mq: string = ''): string | boolean => {
	return typeof span === 'number' || span === 'auto'
		? `_${mq}module-cell--${span}`
		: false;
};

export const ModuleCell: React.FC<ModuleCellProps> = ({
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
