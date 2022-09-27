import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import btcPic from '../public/btc-logo.png';
import investmentPic from '../public/investment.png';

function App() {
	const router = useRouter();
	const handleClickRegister = (e) => {
		console.log('test');
		e.preventDefault();
		router.push('/administration/registration');
	};

	return (
		<Layout>
			<div className="bg-primary pt-12 px-12">
				<div className="w-full flex h-[36rem]">
					<div className="w-1/2"></div>
					<div className="w-1/2 mr-12 flex justify-end">
						<div className="w-3/4 h-3/4 rotate-[330deg]">
							<Image src={btcPic} alt="BTC Picture"></Image>
						</div>
					</div>
				</div>
				<div className="h-[32rem]">
					<div className="w-1/3 mx-auto border-b-2">
						<Image
							src={investmentPic}
							alt="Invest Picture"
							height={360}
							width={360}
						></Image>
					</div>
					<div className="mt-8 text-xl w-full text-center">
						Don&apos;t just save your money, make it
					</div>
					<div className="mt-1 w-full text-xl text-center font-extrabold">
						GROW!
					</div>
				</div>
				<div className="h-[32rem] pt-24">
					<div className="w-full text-3xl text-center">
						Do you dare to start?
					</div>
					<div className="w-full pt-12 text-center flex ">
						<div
							className="w-28 h-12 p-2.5 mt-2 mx-auto rounded-lg bg-secondary text-center cursor-pointer hover:bg-secondary2"
							onClick={handleClickRegister}
						>
							Yes, I am!
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default App;
