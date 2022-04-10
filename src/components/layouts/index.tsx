import React, { useState } from 'react';
import Header from "components/layouts/Header";
import Sidebar from "components/layouts/Sidebar";

const Dashboard = ({ children } : any) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
	return (
		<div className={`page-wrapper`}>
			<Header setIsSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)} />
			<main className={`flex`}>
				<Sidebar isSidebarOpen={isSidebarOpen} />
				<section className={` ${isSidebarOpen ? 'flex-1 overflow-x-scroll' : 'w-full overflow-hidden'} p-5 md:p-10`}>
					{children}
				</section>
			</main>
		</div>
	)
}

export default Dashboard