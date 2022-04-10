import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import { routes } from "utils/enum";

const styles = {
		link : `flex overflow-hidden block w-full relative cursor-pointer items-center space-x-7 md:space-x-5 px-3 md:px-8 text-base md:text-xl text-gray-400 group hover:text-gray-900`,
		activeLink : `text-gray-900`,
		caret : `absolute right-10 text-gray-400`,
		activeSvg : `svg-white` ,
		inactiveSvg : `svg-gray`,
		svgWrapper: 'w-10 h-10 md:w-20 md:h-20 rounded-full flex items-center justify-center group-hover:bg-blue-700',
		activeSvgWrapper: `bg-blue-700`,
		innerLink : `text-base md:text-xl text-gray-700 hover:text-blue-700 font-medium`,
		innerLinkWrapper : `space-y-3`,
		acceptPayment : `text-sm md:text-2xl bg-blue-700 rounded-lg py-3 flex items-center space-x-2 text-white px-2 w-full`
	}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen } : any) => {

	const [selected, setSelected]  =  useState<string>("purchases");


	const caret = (isActive : boolean) => {
		return isActive ? <AiFillCaretDown size={15} className={`${styles.caret}`} /> :
						  <AiFillCaretRight size={15} className={`${styles.caret}`} />
	}

	const svg = (isActive : boolean, url : string) => {
		return <img src={url} className={`${isActive && styles.activeSvg} group-hover:svg-white w-5 h-5 md:w-auto md:h-auto`} />
	}

	const activeLink = (url : string) => {
		return (location.pathname.indexOf(url) === 1);
	}

	return (
		<div className={`${isSidebarOpen ? 'w-3/4 md:w-0' : 'w-0 md:w-2/6' } px-2 overflow-hidden bg-green-200 min-h-screen pt-5 space-y-7`}>
			<ul className={`space-y-4 flex flex-col justify-center border-b-2`}>
				<li>
					<div 
						onClick={() => setSelected('welcome')} 
						className={`${styles.link} ${selected == "welcome" && styles.activeLink}`}>
						<div className={`${styles.svgWrapper} ${selected == "welcome" && styles.activeSvgWrapper}`}>
							{svg(selected == "welcome", "/svgs/shuttle.svg")}
						</div>
						<span>Welcome</span>
					</div>
				</li>

				<li>
					<div 
						onClick={() => setSelected('dashboard')} 
						className={`${styles.link} ${selected == "dashboard" && styles.activeLink}`}>
						<div className={`${styles.svgWrapper} ${selected == "dashboard" && styles.activeSvgWrapper}`}>
							{svg(selected == "dashboard", "/svgs/dashboard.svg")}
						</div>
						<span>Dashboard</span>
					</div>
				</li>

				<li>
					<div 
						onClick={() => setSelected('sales')} 
						className={`${styles.link} ${selected == "sales" && styles.activeLink}`}>
						<div className={`${styles.svgWrapper} ${selected == "sales" && styles.activeSvgWrapper}`}>
							{svg(selected == "sales", "/svgs/sales.svg")}
						</div>
						<span>Sales</span>
						{caret(selected == "sales" ? true : false)}
					</div>
				</li>

				<li>
					<div 
						onClick={() => setSelected('purchases')} 
						className={`${styles.link} ${selected == "purchases" && styles.activeLink}`}>
						<div className={`${styles.svgWrapper} ${selected == "purchases" && styles.activeSvgWrapper}`}>
							<img src="/svgs/cart.svg" className={`w-5 h-5 md:w-auto md:h-auto ${selected == "purchases" ? styles.activeSvg : styles.inactiveSvg}`} />
						</div>
						<span>Purchases</span>
						{caret(selected == "purchases" ? true : false)}
					</div>
					<div 
						className={`${styles.link} ${selected == "purchases" ? 'pt-2 h-auto' : 'h-0'}`}>
						<div className={`${styles.svgWrapper} invisible`}>
							<img src="/svgs/cart.svg"  />
						</div>
						<ul className={`${styles.innerLinkWrapper}`}>
							<li>
								<NavLink to={routes.PURCHASES_BILL} className={`${styles.innerLink} ${activeLink('purchases/bills') && 'text-blue-700' }`}>Bills</NavLink>
							</li>
							<li>
								<NavLink to="/" className={`${styles.innerLink}`}>Vendors</NavLink>
							</li>
							<li>
								<NavLink to="/" className={`${styles.innerLink}`}>Product & Services</NavLink>
							</li>
						</ul>
					</div>
					
				</li>

				<li>
					<div 
						onClick={() => setSelected('accounting')} 
						className={`${styles.link} ${selected == "accounting" && styles.activeLink}`}>
						<div className={`${styles.svgWrapper} ${selected == "accounting" && styles.activeSvgWrapper}`}>
							{svg(selected == "accounting", "/svgs/accounting.svg")}
						</div>
						<span>Accounting</span>
						{caret(selected == "accounting" ? true : false)}
					</div>
				</li>

				<li>
					<div 
						onClick={() => setSelected('banking')} 
						className={`${styles.link} ${selected == "banking" && styles.activeLink}`}>
						<div className={`${styles.svgWrapper} ${selected == "banking" && styles.activeSvgWrapper}`}>
							{svg(selected == "banking", "/svgs/banking.svg")}
						</div>
						<span>Banking</span>
						{caret(selected == "banking" ? true : false)}
					</div>
				</li>

				<li>
					<div 
						onClick={() => setSelected('payroll')} 
						className={`${styles.link} ${selected == "payroll" && styles.activeLink}`}>
						<div className={`${styles.svgWrapper} ${selected == "payroll" && styles.activeSvgWrapper}`}>
							{svg(selected == "payroll", "/svgs/payroll.svg")}
						</div>
						<span>Payroll</span>
						{caret(selected == "payroll" ? true : false)}
					</div>
				</li>

				<li>
					<div 
						onClick={() => setSelected('reports')} 
						className={`${styles.link} ${selected == "reports" && styles.activeLink}`}>
						<div className={`${styles.svgWrapper} ${selected == "reports" && styles.activeSvgWrapper}`}>
							{svg(selected == "reports", "/svgs/reports.svg")}
						</div>
						<span>Reports</span>
						{caret(selected == "reports" ? true : false)}
					</div>
						<div 
						className={`${styles.link} ${selected == "reports" ? 'pt-2 h-auto' : 'h-0'}`}>
						<div className={`${styles.svgWrapper} invisible`}>
							<img src="/svgs/reports.svg"  />
						</div>
						<ul className={`${styles.innerLinkWrapper}`}>
							<li>
								<NavLink to={routes.REPORTS_VIEW} className={`${styles.innerLink} ${activeLink('reports/view') && 'text-blue-700' }`}>View Reports</NavLink>
							</li>
							{["To-Do","Upload Docs","Chat","Schedule","Message Board", "Make Payments","Billing"].map((item : string, index : number) => 
								<li key={index}>
									<NavLink to="/" className={`${styles.innerLink}`}>{item}</NavLink>
								</li>)}
						</ul>
					</div>
				</li>

				<li>
					<div 
						onClick={() => setSelected('analytics')} 
						className={`${styles.link} ${selected == "analytics" && styles.activeLink}`}>
						<div className={`${styles.svgWrapper} ${selected == "analytics" && styles.activeSvgWrapper}`}>
							{svg(selected == "analytics", "/svgs/analytics.svg")}
						</div>
						<span>Analytics</span>
						{caret(selected == "analytics" ? true : false)}
					</div>
				</li>

				<li>
					<div 
						onClick={() => setSelected('setting')} 
						className={`${styles.link} ${selected == "setting" && styles.activeLink}`}>
						<div className={`${styles.svgWrapper} ${selected == "setting" && styles.activeSvgWrapper}`}>
							{svg(selected == "setting", "/svgs/setting.svg")}
						</div>
						<span>Settings</span>
						{caret(selected == "setting" ? true : false)}
					</div>
				</li>

				<li>
					<div 
						onClick={() => setSelected('logout')} 
						className={`${styles.link} text-gray-900 pt-5`}>
						<div className={`${styles.svgWrapper}`}>
							{svg(selected == "logout", "/svgs/logout.svg")}
						</div>
						<span>Logout</span>
					</div>
				</li>

			</ul>

			<div className={`px-5`}>
				<button className={`${styles.acceptPayment}`}>
					<img src="/svgs/wallet.svg" className={`h-10 w-10 md:w-auto md:h-auto`} />
					<div>Accept Payments</div>
				</button>
			</div>
		</div>
	)
}

export default Sidebar