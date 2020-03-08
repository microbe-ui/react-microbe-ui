// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import * as React from 'react';

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export type ModuleGridCol = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ModuleGridProps {
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

// -----------------------------------------------------------------------------
// ModuleGrid Component
// -----------------------------------------------------------------------------

const colClassName = (col?: ModuleGridCol, mq: string = ''): string | boolean => {
	return typeof col === 'number' || col === 'auto'
		? `_${mq}module-grid--${col}`
		: false;
};

export const ModuleGrid: React.FC<ModuleGridProps> = ({
	cols,
	xxsCols,
	xsCols,
	children
}) => {
	const classes = [
		'_module-grid',
		colClassName(cols),
		colClassName(xxsCols, 'xxs:'),
		colClassName(xsCols, 'xs:')
	];

	return <div className={classes.filter(Boolean).join(' ')}>{children}</div>;
};

// -----------------------------------------------------------------------------
// ModuleCell Component
// -----------------------------------------------------------------------------

export type ModuleCellSpan = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ModuleCellProps = {
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
};

const spanClassName = (span?: ModuleCellSpan, mq: string = ''): string | boolean => {
	return typeof span === 'number' || span === 'auto'
		? `_${mq}module-cell--${span}`
		: false;
};

export const ModuleCell: React.FC<ModuleCellProps> = ({ span, children }) => {
	const classes = ['_module-cell', spanClassName(span)];
	return <div className={classes.join(' ')}>{children}</div>;
};
