import React from 'react'
import { NavLink } from "react-router-dom";
import { routes } from "utils/enum";

const styles = {
	title : `text-xl md:text-3xl font-medium`,
}

const Home = () => {
	return (
		<div className={`page-wrapper flex flex-col space-y-5 items-center justify-center`}>
			<NavLink to="/" className={`flex space-x-3 md:space-x-7 items-center`}>
					<img src="/images/logo/logo.png" className={`h-10 w-10 md:h-auto md:w-auto`} />
					<h1 className={`${styles.title}`}>HostBeak</h1>
			</NavLink>

			<div className={`space-x-5`}>
				<NavLink to="/signup" className={`bg-blue-800 text-white font-semibold py-3 px-5 rounded-lg`}>Signup Page</NavLink>
				<NavLink to={routes.PURCHASES_BILL} className={`bg-blue-800 text-white font-semibold py-3 px-5 rounded-lg`}>Dashboard</NavLink>
			</div>
		</div>
	)
}

export default Home
