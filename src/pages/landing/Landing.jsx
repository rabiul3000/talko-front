import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './landing.scss';

const Landing = () => {
	return (
		<div>
			<Navbar />
			<div
				className='hero'
				style={{
					display: 'flex',
					justifyContent: 'center',
					gap: '1rem',
					alignItems: 'center',
					width: '100%',
					height: '90vh',
				}}
			>
				<Link to='/register' className='btn'>
					Register
				</Link>
				<Link to='/login' className='btn'>
					Login
				</Link>
			</div>
		</div>
	);
};

export default Landing;
