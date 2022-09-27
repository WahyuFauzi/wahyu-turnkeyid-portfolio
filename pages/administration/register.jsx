import { useState } from 'react';
import Layout from '../../components/layout/Layout';

export default function Register() {
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleChangeEmail = (event) => {
		setEmail(event.target.value);
	};

	const handleChangeUserName = (event) => {
		setUserName(event.target.value);
	};

	const handleChangePassword = (event) => {
		setPassword(event.target.value);
	};

	const handleChangeConfirmPassword = (event) => {
		setConfirmPassword(event.target.value);
	};

	const sendNotification = () => {
		if ((password = confirmPassword)) {
			alert('password isn not match');
		}
	};

	return (
		<Layout>
			<div className="w-full h-screen pt-10 flex-col bg-primary">
				<div className="w-1/4 h-[20rem] mx-auto">
					<div className="w-full">Register</div>
					<div className="w-full h-full rounded-md mx-auto flex bg-primary2">
						<div className="w-10/12 h-full pt-4 mx-auto">
							<div className="w-full pt-2">
								<p>E-mail</p>
								<div className="w-full">
									<input
										className="w-full rounded-md bg-font2 text-font3"
										type="text"
										onChange={handleChangeEmail}
									/>
								</div>
							</div>
							<div className="w-full pt-2">
								<p>Username</p>
								<div className="w-full">
									<input
										className="w-full rounded-md bg-font2 text-font3"
										type="text"
										onChange={handleChangeUserName}
									/>
								</div>
							</div>
							<div className="w-full pt-2">
								<p>Password</p>
								<div className="w-full">
									<input
										className="w-full rounded-md bg-font2 text-font3"
										type="text"
										onChange={handleChangePassword}
									/>
								</div>
							</div>
							<div className="w-full pt-2">
								<p>Confirm Password</p>
								<div className="w-full">
									<input
										className="w-full rounded-md bg-font2 text-font3"
										type="text"
										onChange={handleChangeConfirmPassword}
									/>
								</div>
							</div>
							<div className="w-full pt-4 text-sm flex justify-between">
								<div
									className="w-20 h-8 pt-1 rounded-lg bg-secondary text-center cursor-pointer hover:bg-secondary2"
									onClick={sendNotif}
								>
									Sign Up
								</div>
								<div className="text-secondary2 underline underline-offset-4 cursor-pointer">
									I already had an account
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
