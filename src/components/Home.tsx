import React from 'react'
import { NavLink } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
const styles = {
	label : `text-xl font-medium text-gray-500`,
	formInput : `form-control py-1 opacity-90 text-2xl font-bold placeholder:font-medium`,
	formGroup: `form-group space-y-2`,
	formCheckbox: `rounded-lg appearance-none checked:bg-blue-500 checked:outline-none checked:border-none bg-gray-200 cursor-pointer h-8 w-8 border border-gray-300`
}

const Home = () => {
	return (
		<div className={`page-wrapper p-0`}>
			<main className="grid md:grid-cols-2 min-h-screen w-full">
				<section className={`relative overflow-hidden hidden md:block`}>
					<img src="images/bg/vibra.png" className={`w-full h-full object-cover`} />
					<p className={`absolute bottom-40 right-0 lg:right-16 text-4xl text-white p-5 w-full lg:w-[70%]`}>
						Building exceptional services with Back Office Support and Business Perfomance
					</p>
				</section>
				<section className={`p-5 md:p-10 px-5 md:px-12 space-y-10`}>
					<header className={`space-y-2`}>
						<h1 className={`text-blue-900 text-4xl font-black`}>Create Account</h1>
						<p className={`text-2xl text-gray-600 opacity-60`}>Build an exceptional business</p>
					</header>

					<div className={`space-y-5`}>
						<form className={`grid md:grid-cols-2 gap-10`}>
							<div className={`${styles.formGroup}`}>
								<label className={`${styles.label}`}>First Name</label>
								<input type="text" className={`${styles.formInput}`} placeholder='Enter your first name' />
							</div>

							<div className={`${styles.formGroup}`}>
								<label className={`${styles.label}`}>Last Name</label>
								<input type="text" className={`${styles.formInput}`} placeholder='Enter your last name' />
							</div>

							<div className={`${styles.formGroup} md:col-span-2`}>
								<label className={`${styles.label}`}>Phone Number</label>
								<input type="text" className={`${styles.formInput}`} placeholder='Enter your phone number' />
							</div>

							<div className={`${styles.formGroup} md:col-span-2`}>
								<label className={`${styles.label}`}>Email Address</label>
								<input type="email" className={`${styles.formInput}`} placeholder='Enter your email' />
							</div>

							<div className={`${styles.formGroup} md:col-span-2`}>
								<label className={`${styles.label}`}>Password</label>
								<input type="password" className={`${styles.formInput}`} placeholder='Enter your password' />
							</div>

							<div className={`${styles.formGroup} md:col-span-2 flex justify-between space-x-2 text-xl items-center`}>
								<div className={`flex items-center space-x-3 text-gray-500`}>
									<div className={`flex items-center relative`}>
										<input type="checkbox" id="rme" className={`${styles.formCheckbox}`} />
										<BsCheckLg className={`absolute top-3 left-3 text-white`} size={10} />
									</div>
									<label htmlFor="rme">Remember me</label>
								</div>
								<NavLink to="/" className={`text-blue-500`}>Forgot Password?</NavLink>
							</div>

							<div className={`${styles.formGroup} md:col-span-2`}>
								<button className={`btn btn-lg md:btn-xl btn-primary btn-block text-xl md:text-3xl shadow-lg`}>Sign Up</button>
							</div>
						</form>
						<div className={`flex justify-center space-x-2 items-center text-xl font-medium text-gray-500`}>
								<span>Got an Account?</span> <NavLink to="/" className={`text-blue-500`}>Sign In</NavLink>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Home
