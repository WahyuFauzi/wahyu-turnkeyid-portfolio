import Layout from '../../components/layout/Layout';
export default function Login() {
	return (
		<Layout>
			<div className="w-full h-screen pt-10 flex-col bg-primary">
				<div className="w-1/4 h-[14rem] mx-auto">
					<div className="w-full">Login</div>
					<div className="w-full h-full rounded-md mx-auto flex bg-primary2">
						<div className="w-10/12 h-full pt-4 mx-auto">
							<div className="w-full pt-2">
								<p>Username</p>
								<div className="w-full">
									<input
										className="w-full rounded-md bg-font2 text-font3"
										type="text"
									/>
								</div>
							</div>
							<div className="w-full pt-2">
								<p>Password</p>
								<div className="w-full">
									<input
										className="w-full rounded-md bg-font2 text-font3"
										type="text"
									/>
								</div>
							</div>
							<div className="w-full pt-4 text-sm flex justify-between">
								<div className="w-20 h-8 pt-1 rounded-lg bg-secondary text-center cursor-pointer hover:bg-secondary2">
									Login
								</div>
								<div className="w-1/2 text-secondary2 underline underline-offset-4 cursor-pointer">
									Forgot My Password
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
