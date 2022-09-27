import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Main() {
	const router = useRouter();
	const [coins, setCoins] = useState([
		{
			id: 'id',
			price: 0,
			change: 0,
			owned: 0,
		},
	]);

	const pinnedCoin = ['bitcoin', 'ethereum'];

	const requestPrice = async (ids) => {
		axios
			.get(
				`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
			)
			.then((res) => {
				let coinsList = coins;
				const newCoin = {
					id: ids,
					price: res.data[ids].usd,
					change: res.data[ids].usd_24h_change,
					owned: 0,
				};
				coinsList.push(newCoin);
				setCoins(coinsList);
				console.log(coins);
			});
	};

	const handleClickHome = (e) => {
		e.preventDefault();
		router.push('/');
	};

	const handleClickMainDashboard = (e) => {
		e.preventDefault();
		router.push('/dashboard/main');
	};

	const listItems = coins.map((coin, index) => (
		<div
			key={index}
			className="h-10 mx-6 my-2 pt-2 px-2 rounded flex justify-between bg-primary2"
		>
			<div className="w-1/4 text-secondary2">{coin.id}</div>
			<div className="w-1/4">{coin.price}</div>
			<div className="w-1/4">{coin.change}</div>
			<div className="w-1/4">{coin.owned}</div>
		</div>
	));

	useEffect(() => {
		for (const i in pinnedCoin) {
			requestPrice(pinnedCoin[i]);
		}
	});

	return (
		<div className="w-full h-screen flex-col bg-primary">
			<div className="w-full h-[8vh] bg-primary2 flex border-b-2">
				<div className="w-1/2 mx-4">
					<div
						className="w-36 pt-4 text-center cursor-pointer"
						onClick={handleClickHome}
					>
						Creepto Trade
					</div>
				</div>
				<div className="w-1/2 h-full pt-4 pr-4 flex justify-end text-sm">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 cursor-pointer"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</div>
			</div>
			<div className="w-full h-[92vh] flex">
				<div className="w-[24vw] h-full flex-col bg-secondary">
					<div className="w-2/3 h-36 mt-12 mx-auto ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-full h-full"
						>
							<path
								fillRule="evenodd"
								d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<div className="w-full h-fit text-center">Username</div>
					<div className="w-full h-fit mt-4 mx-auto">
						<ul className="text-center flex-col">
							<li
								className="w-2/3 mx-auto my-2 rounded cursor-pointer hover:bg-secondary2"
								onClick={handleClickMainDashboard}
							>
								Main Dashboard
							</li>
							<li className="w-2/3 mx-auto my-2 rounded cursor-pointer hover:bg-secondary2">
								Transaction
							</li>
							<li className="w-2/3 mx-auto my-2 rounded cursor-pointer hover:bg-secondary2">
								Settings
							</li>
						</ul>
					</div>
				</div>
				<div className="w-[76vw] h-full flex-col">
					<div className="w-full h-8 flex justify-between mt-8 px-6">
						<div className="w-1/4">Code</div>
						<div className="w-1/4">Price</div>
						<div className="w-1/4">Change%</div>
						<div className="w-1/4">Owned</div>
					</div>
					{listItems}
				</div>
			</div>
		</div>
	);
}
