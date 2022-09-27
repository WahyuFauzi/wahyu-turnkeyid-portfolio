import React from 'react';
import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();
	const handleClickHome = (e) => {
		e.preventDefault();
		router.push('/');
	};

	const handleClickLogin = (e) => {
		e.preventDefault();
		router.push('/administration/login');
	};

	const handleClickSignUp = (e) => {
		e.preventDefault();
		router.push('/administration/register');
	};

	return (
		<div className="w-full h-14 bg-primary border-b-2 flex">
			<div className="w-1/2 mx-4">
				<div
					className="w-36 pt-4 text-center cursor-pointer"
					onClick={handleClickHome}
				>
					Creepto Trade
				</div>
			</div>
			<div className="w-1/2 h-full flex justify-end text-sm">
				<div className="w-20 h-full mx-2 py-4 text-center cursor-pointer hover:bg-primary2">
					Home
				</div>
				<div
					className="w-20 h-full mx-2 py-4 text-center cursor-pointer hover:bg-primary2"
					onClick={handleClickSignUp}
				>
					Sign Up
				</div>
				<div
					className="w-20 pt-2 my-2 mx-2 rounded-lg bg-secondary text-center cursor-pointer hover:bg-secondary2"
					onClick={handleClickLogin}
				>
					Login
				</div>
			</div>
		</div>
	);
}
