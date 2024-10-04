import React from 'react';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		if (email === 'rabiul@gmail.com' && password === 'Z9gWEtn8ZMNqtGq') {
			console.log('success');
			navigate('/login');
		} else console.log('email or password is wrong');
	};

	return (
		<form className='register' onSubmit={handleSubmit}>
			<h1 className='header'>Register Page</h1>
			<input type='email' placeholder='email' name='email' className='email' />
			<input
				type='password'
				placeholder='password'
				name='password'
				className='password'
			/>
			<input type='submit' value={'Lets Go'} className='submitBtn' />
			<Link className='redirectbtn' to={'/login'}>
				Already Registered? Login
			</Link>
		</form>
	);
};

export default Register;
