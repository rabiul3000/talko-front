import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';

const Login = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		if (email === 'rabiul@gmail.com' && password === 'Z9gWEtn8ZMNqtGq') {
			console.log('success');
			navigate('/dashboard', {state: 'hello'});
		} else alert('email or password is wrong');
	};

	return (
		<form className='login' onSubmit={handleSubmit}>
			<h1 className='header'>Login Page</h1>
			<input type='email' placeholder='email' name='email' className='email' />
			<input
				type='password'
				placeholder='password'
				name='password'
				className='password'
			/>
			<input type='submit' value={'Lets Go'} className='submitBtn' />
			<Link className='redirectbtn' to={'/register'}>
				Not a Member yet? Register
			</Link>
		</form>
	);
};

export default Login;
