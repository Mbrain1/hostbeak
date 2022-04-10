import React from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import { HiOutlineChevronDown } from "react-icons/hi";
import { VscBell } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const styles = {
	title : `text-xl md:text-3xl font-medium`,
	pageWrapper : `px-5 py-7 bg-green-200 flex justify-between`,
	leftWrapper : `bg-white shadow-lg rounded-[30px] flex items-center space-x-3 md:space-x-7 py-1 md:py-3 px-3 md:px-7`,
	rightWrapper : `flex items-center space-x-2 md:space-x-7 py-3`,
	bellWrapper : `w-14 h-14 rounded-full border relative hidden md:block`,
	bellActive : `absolute block w-2 h-2 bg-orange-500 top-4 right-4 rounded-full`,
}

const Header = ({ setIsSidebarOpen } : any) => {
	return (
		<header className={`${styles.pageWrapper}`}>
			<div className={`${styles.leftWrapper}`}>
				<NavLink to="/" className={`flex space-x-3 md:space-x-7 items-center`}>
					<img src="/images/logo/logo.png" className={`h-10 w-10 md:h-auto md:w-auto`} />
					<h1 className={`${styles.title}`}>HostBeak</h1>
				</NavLink>
				<AiFillCaretRight className={`text-[25px] text-blue-500 cursor-pointer`} onClick={() => setIsSidebarOpen()} />
			</div>

			<div className={`${styles.rightWrapper}`}>
				<button className={`${styles.bellWrapper}`}>
					<VscBell size={25} className={`m-auto`} />
					  <span className={`${styles.bellActive}`}></span>
				</button>
				<img src="/images/profile/ogoluwa.png" className={`rounded-full h-8 md:h-14 w-8 md:w-14`} />
				<h1 className={``}>Ogoluwa</h1>
				<HiOutlineChevronDown size={25} className={``} />
			</div>

		</header>
	)
}

export default Header