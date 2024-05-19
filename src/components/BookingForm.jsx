// src/components/BookingForm.js
import { useState } from "react";
import frameIcon from "../img/icons/Frame.svg";
import vector1Icon from "../img/icons/Vector (1).svg";
import vector3Icon from "../img/icons/Vector (3).svg";

const BookingForm = () => {
	const [formData, setFormData] = useState({
		from: "",
		to: "",
		date: "",
		guests: "",
		ticketClass: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setFormData({
			from: "",
			to: "",
			date: "",
			guests: "",
			ticketClass: "",
		});
	};

	return (
		<div className="mt-[160px] mx-4 md:mt-[160px] relative">
			<div className="bg-white rounded-md max-w-6xl w-full mx-auto">
				<form
					className="first-hero lws-inputform"
					onSubmit={handleSubmit}
				>
					{/* From */}
					<div className="des-from">
						<p>Destination From</p>
						<div className="flex flex-row">
							<img src={frameIcon} alt="" />
							<select
								className="outline-none px-2 py-2 w-full"
								name="from"
								value={formData.from}
								onChange={handleChange}
								required
							>
								<option value="" hidden>
									Please Select
								</option>
								<option>Dhaka</option>
								<option>Sylhet</option>
								<option>Saidpur</option>
								<option>Coxs Bazar</option>
							</select>
						</div>
					</div>

					{/* To */}
					<div className="des-from">
						<p>Destination To</p>
						<div className="flex flex-row">
							<img src={frameIcon} alt="" />
							<select
								className="outline-none px-2 py-2 w-full"
								name="to"
								value={formData.to}
								onChange={handleChange}
								required
							>
								<option value="" hidden>
									Please Select
								</option>
								<option>Dhaka</option>
								<option>Sylhet</option>
								<option>Saidpur</option>
								<option>Coxs Bazar</option>
							</select>
						</div>
					</div>

					{/* Date */}
					<div className="des-from">
						<p>Journey Date</p>
						<input
							type="date"
							className="outline-none px-2 py-2 w-full date"
							name="date"
							value={formData.date}
							onChange={handleChange}
							required
						/>
					</div>

					{/* Guests */}
					<div className="des-from">
						<p>Guests</p>
						<div className="flex flex-row">
							<img src={vector1Icon} alt="" />
							<select
								className="outline-none px-2 py-2 w-full"
								name="guests"
								value={formData.guests}
								onChange={handleChange}
								required
							>
								<option value="" hidden>
									Please Select
								</option>
								<option value="1">1 Person</option>
								<option value="2">2 Persons</option>
								<option value="3">3 Persons</option>
								<option value="4">4 Persons</option>
							</select>
						</div>
					</div>

					{/* Class */}
					<div className="des-from !border-r-0">
						<p>Class</p>
						<div className="flex flex-row">
							<img src={vector3Icon} alt="" />
							<select
								className="outline-none px-2 py-2 w-full"
								name="ticketClass"
								value={formData.ticketClass}
								onChange={handleChange}
								required
							>
								<option value="" hidden>
									Please Select
								</option>
								<option>Business</option>
								<option>Economy</option>
							</select>
						</div>
					</div>

					<button className="addCity" type="submit" id="lws-addCity">
						<svg
							width="15px"
							height="15px"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4.5v15m7.5-7.5h-15"
							/>
						</svg>
						<span className="text-sm">Book</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default BookingForm;
