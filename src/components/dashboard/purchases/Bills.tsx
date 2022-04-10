import React from 'react'
import { AiFillCaretRight, AiFillCaretDown, AiOutlineEdit } from "react-icons/ai";
import { FaRegCalendar } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
const styles = {
	label : `text-sm text-gray-900 font-bold`,
	inputField: `focus:outline-none block w-full py-3 px-3 text-lg text-gray-300 placeholder:text-gray-300 appearance-none rounded border border-gray-200`,
	formIcon : `absolute bottom-4 right-3 text-gray-900`,
	formGroup : `form-group space-y-2`,
	td : `py-4 px-1 pr-3`
}

const Bills = () => {
	return (
		<div className={`space-y-7`}>
			<header>
				<h1 className={`title`}>Add bill</h1>
			</header>

			<section className={``}>
				<form className={`grid md:grid-cols-3 lg:grid-cols-4 gap-y-5 lg:gap-y-10 gap-x-10 lg:gap-x-14`}>
					<div className={`${styles.formGroup}`}>
						<label className={`${styles.label}`}>Vendor</label>
						<select className={`${styles.inputField}`}>
							<option>Choose</option>
						</select>
						<AiFillCaretDown size={20} className={`${styles.formIcon}`} />
					</div>

					<div className={`${styles.formGroup}`}>
						<label className={`${styles.label}`}>Vendor</label>
						<input className={`${styles.inputField}`} placeholder="2021-03-25" />
						<FaRegCalendar size={20} className={`${styles.formIcon} opacity-30 `} />
					</div>

					<div className={`${styles.formGroup}`}>
						<label className={`${styles.label}`}>Bill#</label>
						<input className={`${styles.inputField}`}  />
					</div>

					<div className={`${styles.formGroup} lg:col-start-1`}>
						<label className={`${styles.label}`}>Currency</label>
						<select className={`${styles.inputField} pr-10`}>
							<option>USD - U.S dollar</option>
						</select>
						<AiFillCaretDown size={20} className={`${styles.formIcon}`} />
					</div>

					<div className={`${styles.formGroup}`}>
						<label className={`${styles.label}`}>Due Date</label>
						<input className={`${styles.inputField}`} placeholder="2021-03-25" />
						<FaRegCalendar size={20} className={`${styles.formIcon} opacity-30 `} />
					</div>

					<div className={`${styles.formGroup} md:row-span-2 overflow-hidden flex flex-col`}>
						<label className={`${styles.label}`}>Notes</label>
						<textarea className={`${styles.inputField} resize-none h-full`}></textarea>
					</div>

					<div className={`${styles.formGroup} lg:col-start-1`}>
						<label className={`${styles.label}`}>Vendor</label>
						<input className={`${styles.inputField}`} placeholder="Upload File" />
						<BsUpload size={20} className={`${styles.formIcon} opacity-30 `} />
					</div>

					<div className={`${styles.formGroup}`}>
						<label className={`${styles.label}`}>P.O./S.O</label>
						<input className={`${styles.inputField}`}  />
					</div>
				</form>
			</section>

			<section className={`space-y-5`}>
			  
			  	<div className={`rounded-lg border border-gray-200 px-5 py-2`}>
			  		<div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th>Item</th>
							<th>Expense Category</th>
							<th>Description</th>
							<th>Qty</th>
							<th>Price</th>
							<th className={`min-w-[150px]`}>Tax</th>
							<th>Amount</th>
							<th></th>
						</tr>
					</thead>

					<tbody className={`font-bold`}>
						<tr className={`border-b border-gray-200`}>
							<td className={`${styles.td}`}>
								<div className={`${styles.formGroup}`}>
									<select className={`${styles.inputField} min-w-[150px]`}>
										<option>Choose</option>
									</select>
									<AiFillCaretDown size={20} className={`${styles.formIcon}`} />
								</div>
							</td>

							<td className={`${styles.td}`}>
								<div className={`${styles.formGroup}`}>
									<select className={`${styles.inputField} min-w-[150px]`}>
										<option>Choose</option>
									</select>
									<AiFillCaretDown size={20} className={`${styles.formIcon}`} />
								</div>
							</td>

							<td className={`${styles.td}`}>
								<div className={`${styles.formGroup}`}>
									<input className={`${styles.inputField}`}  />
								</div>
							</td>

							<td className={`${styles.td}`}>
								<div className={`${styles.formGroup}`}>
									<input className={`${styles.inputField}`} defaultValue={1} />
								</div>
							</td>

							<td className={`${styles.td}`}>
								<div className={`${styles.formGroup}`}>
									<input className={`${styles.inputField}`} defaultValue={0} />
								</div>
							</td>

							<td className={`${styles.td}`}>
								<div className={`${styles.formGroup} flex items-center space-x-1`}>
									<input className={`${styles.inputField}`}  />
									<AiOutlineEdit size={40} />
								</div>
							</td>

							<td className={`${styles.td}`}>
								<div className={`${styles.formGroup}`}>
									N0.00
								</div>
							</td>

							<td className={`${styles.td}`}>
								<div className={`${styles.formGroup}`}>
									<FiTrash2 size={25} className={`text-blue-700`} />
								</div>
							</td>

						</tr>


						<tr>
							<td colSpan={6} className='py-2'>
								<div className={`${styles.formGroup} text-right`}>
									Subtotal:
								</div>
							</td>
							<td colSpan={2} className='py-2'>
								<div className={`${styles.formGroup}`}>
									N0.00
								</div>
							</td>
						</tr>

						<tr>
							<td colSpan={6} className='py-2'>
								<div className={`${styles.formGroup} text-right`}>
									Total (NGN):
								</div>
							</td>
							<td colSpan={2} className='py-2'>
								<div className={`${styles.formGroup}`}>
									N0.00
								</div>
							</td>
						</tr>

					</tbody>
				</table>
			  </div>
			  	</div>

			  	<div className={`flex justify-end space-x-4`}>
			  		<button className={`border border-gray-500 bg-white px-8 text-lg rounded py-4 text-gray-900`}>Cancel</button>
			  		<button className={`bg-blue-500 px-8 text-lg rounded py-4 text-white`}>Save</button>
			  	</div>

			  
			</section>
		</div>
	)
}

export default Bills
