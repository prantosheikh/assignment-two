// src/App.js
import { useState } from "react";
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";
import BookingTable from "./components/BookingTable";
import "./App.css"; // Create corresponding CSS file if needed

function App() {
	const [bookings, setBookings] = useState([]);

	const handleAddBooking = (booking) => {
		setBookings([...bookings, booking]);
	};

	const handleRemoveBooking = (index) => {
		const newBookings = bookings.filter((_, i) => i !== index);
		setBookings(newBookings);
	};

	return (
		<div className="App">
			<Header />
			<section>
				<BookingForm onAddBooking={handleAddBooking} />
				<BookingTable
					bookings={bookings}
					onRemoveBooking={handleRemoveBooking}
				/>
			</section>
		</div>
	);
}

export default App;
