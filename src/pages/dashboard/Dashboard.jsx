import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.scss';
import ConnectTwitter from '../../components/ConnectTwitter';

const Dashboard = () => {
	const user = 'rabiul@gmail.com';


	return (
		<div className='dashboard'>
			<h1>
				Welcome to Talko <span>{user}</span>
			</h1>

			{/* Prompt to link accounts */}
			<div className='link-accounts twitter'>
				<p>
					Connect your <b>Twitter</b> account to start managing your posts and
					messages.
				</p>

				<ConnectTwitter />
			</div>

			{/* Profile and Settings */}
			<div className='profile-settings'>
				<Link to='/profile' className='btn'>
					View Profile
				</Link>
				<Link to='/settings' className='btn'>
					Account Settings
				</Link>
			</div>

			{/* Recent Activity */}
			<div className='recent-activity'>
				<h2>Recent Activity</h2>
				<p>No recent activity yet.</p>
			</div>
		</div>
	);
};

export default Dashboard;
