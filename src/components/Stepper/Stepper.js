import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
import steps from './stepperConfig';

const NewStepper = () => {
	const [stepper, setStepper] = useState();
	const [activeStep, setActiveStep] = useState(1);
	console.log('NewStepper -> activeStep', activeStep);

	const getStepperControls = () => {
		if (activeStep === steps.length) {
			return (
				<>
					<button
						className='btn btn-primary mr-1'
						onClick={handlePreviousStep}
					>
						Back
					</button>
					<button
						className='btn btn-primary'
						onClick={handleComplete}
					>
						Complete
					</button>
				</>
			);
		} else if (activeStep !== 1) {
			return (
				<>
					<button
						className='btn btn-primary mr-1'
						onClick={handlePreviousStep}
					>
						Back
					</button>
					<button
						className='btn btn-primary ml-1'
						onClick={handleNextStep}
					>
						Next
					</button>
				</>
			);
		} else {
			return (
				<button
					className='btn btn-primary ml-1'
					onClick={handleNextStep}
				>
					Next
				</button>
			);
		}
	};

	const handleNextStep = () => {
		stepper.next();
		setActiveStep(activeStep + 1);
	};

	const handlePreviousStep = () => {
		stepper.previous();
		setActiveStep(activeStep - 1);
	};

	const handleComplete = () => {
		console.log('complete clicked');
	};

	useEffect(() => {
		const newStepper = new Stepper(document.querySelector('#stepper'), {
			linear: true,
			animation: true,
		});
		console.log(newStepper);
		setStepper(newStepper);
	}, []);

	return (
		<div id='stepper' className='bs-stepper'>
			<div className='bs-stepper-header' role='tablist'>
				{/* your steps here */}
				{steps.map((step) => (
					<>
						<div
							className='step'
							data-target={`#${step.name}-part`}
						>
							<button
								type='button'
								className='step-trigger'
								role='tab'
								aria-controls={`${step.name}-part`}
								id={`${step.name}-part-trigger`}
							>
								<span className='bs-stepper-circle'>
									{step.id}
								</span>
								<span className='bs-stepper-label'>
									{step.name}
								</span>
							</button>
						</div>
						{step.id != steps.length && (
							<div className='line'></div>
						)}
					</>
				))}
			</div>

			<div className='bs-stepper-content'>
				{/* your steps content here */}
				{steps.map((step) => (
					<div
						id={`${step.name}-part`}
						className='content'
						role='tabpanel'
						aria-labelledby={`${step.name}-part-trigger`}
					>
						{step.component}
					</div>
				))}
			</div>
			{getStepperControls()}
		</div>
	);
};

export default NewStepper;
