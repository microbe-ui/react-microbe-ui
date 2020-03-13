import React from 'react';

import { Spacer } from './components/Spacer';
import { ModuleGrid, ModuleCell } from './components/ModuleGrid';

const Blank: React.FC = ({ children }) => (
	<div>
		<div style={{
			border: '1px solid #aaa',
			padding: 16
		}}>{children}</div>
	</div>
);

function App() {
	return (
		<div className="App" style={{
			maxWidth: 980,
			margin: '2rem auto'
		}}>
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
	);
}

export default App;
