import StepComponentExample from './StepComponetExample';

const steps = [
	{
		id: '1',
		name: 'one',
		component: <StepComponentExample title='Step One' />,
	},
	{
		id: '2',
		name: 'two',
		component: <StepComponentExample title='Step Two' />,
	},
	{
		id: '3',
		name: 'three',
		component: <StepComponentExample title='Step Three' />,
	},
	{
		id: '4',
		name: 'four',
		component: <StepComponentExample title='Step Four' />,
	},
];

export default steps;
