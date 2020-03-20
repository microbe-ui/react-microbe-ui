import React from 'react';

import { Spacer } from './components/Spacer';
import { Owl } from './components/Owl';
import { ModuleGrid, ModuleCell } from './components/ModuleGrid';

const Blank: React.FC = ({ children }) => (
	<div>
		<div
			style={{
				border: '1px solid #aaa',
				padding: 16
			}}
		>
			{children}
		</div>
	</div>
);

const SpanBlank: React.FC = ({ children }) => (
	<span
		style={{
			display: 'inline-block',
			verticalAlign: 'top'
		}}
	>
		<Blank>{children}</Blank>
	</span>
);

function App() {
	return (
		<div
			className="App"
			style={{
				maxWidth: 980,
				margin: '2rem auto'
			}}
		>
			<Owl size="md" componentProps={{
				style: {
					background: 'red'
				}
			}}>
				<div>
					<Spacer size="xxl">
						<SpanBlank>Lorem</SpanBlank>
						<SpanBlank>ipsum</SpanBlank>
						<SpanBlank>dolor</SpanBlank>
						<SpanBlank>sit</SpanBlank>
						<SpanBlank>amet,</SpanBlank>
						<SpanBlank>consectetur</SpanBlank>
						<SpanBlank>adipisicing</SpanBlank>
						<SpanBlank>elit.</SpanBlank>
						<SpanBlank>Lorem</SpanBlank>
						<SpanBlank>ipsum</SpanBlank>
						<SpanBlank>dolor</SpanBlank>
						<SpanBlank>sit</SpanBlank>
						<SpanBlank>amet,</SpanBlank>
						<SpanBlank>consectetur</SpanBlank>
						<SpanBlank>adipisicing</SpanBlank>
						<SpanBlank>elit.</SpanBlank>
					</Spacer>
				</div>
				<div>
					<ModuleGrid cols={4} xxlCols={5} spacerSize="md" xxlSpacerSize="xxl">
						<ModuleCell span={6}>
							<Blank>cell</Blank>
						</ModuleCell>
						<ModuleCell>
							<Blank>cell</Blank>
						</ModuleCell>
						<ModuleCell>
							<Blank>cell</Blank>
						</ModuleCell>
					</ModuleGrid>
				</div>
			</Owl>
		</div>
	);
}

export default App;
