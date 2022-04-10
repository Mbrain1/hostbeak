import React from 'react'
import { FiMessageSquare } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";
const styles = {
	formGroup : `form-group space-y-2`,
	td : `py-4 px-5`,
	formCheckbox: `rounded-lg appearance-none checked:bg-blue-500 checked:outline-none checked:border-none cursor-pointer h-6 w-6 border border-gray-200`
}

const Bills = () => {
	return (
		<div className={`space-y-7`}>
			<header>
				<h1 className={`title`}>View reports</h1>
			</header>

			<section className={`space-y-5`}>
			  		<div className="table-responsive border border-gray-200 rounded-lg">
						<table className="table">
							<tbody className={`font-semibold text-xl`}>
								<tr className={`border-b border-gray-200 min-w-full`}>

									<td className={`${styles.td}`}>
										<div className={`flex items-center relative`}>
											<input type="checkbox" id="rme" className={`${styles.formCheckbox}`} />
											<BsCheckLg className={`absolute top-2 left-2 text-white`} size={10} />
										</div>
									</td>

									<td className={`${styles.td} space-x-2`}>
										<span className={`text-blue-700`}>February Report</span> 
										<span className={`text-green-300 bg-green-100 px-4 py-1 text-xs rounded-full`}>NEW</span>
									</td>

									<td className={`${styles.td} flex-1 opacity-70`}>
										4th, October 2021 10:02am
									</td>

									<td className={`${styles.td}`}>
										<button className={`bg-blue-500 font-bold px-16 text-lg rounded py-4 text-white`}>View</button>
									</td>

									<td className={`${styles.td}`}>
										<FiMessageSquare className={`text-blue-700`} size={30} />
									</td>

								</tr>

								{[...Array(8).keys()].map((item : number, index : number) => 
									<tr className={`border-b border-gray-200 min-w-full`} key={index}>

										<td className={`${styles.td}`}>
											<div className={`flex items-center relative`}>
												<input type="checkbox" id="rme" className={`${styles.formCheckbox}`} />
												<BsCheckLg className={`absolute top-2 left-2 text-white`} size={10} />
											</div>
										</td>

										<td className={`${styles.td}`}>
											March 2021 Report
										</td>

										<td className={`${styles.td} flex-1 opacity-70`}>
											4th, October 2021 10:02am
										</td>

										<td className={`${styles.td}`}>
											<button className={`bg-blue-500 font-bold px-16 text-lg rounded py-4 text-white`}>View</button>
										</td>

										<td className={`${styles.td}`}>
											<FiMessageSquare className={`text-blue-700`} size={30} />
										</td>

									</tr>
								)}

							</tbody>
						</table>
			  </div>	  
			</section>
		</div>
	)
}

export default Bills
