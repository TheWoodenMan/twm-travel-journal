import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data/data";

function App() {
	const locations = data.map((location) => {
		return (
			<Card
				imageUrl={location.imageUrl}
				title={location.title}
				location={location.location}
				googleMapsUrl={location.googleMapsUrl}
				startDate={location.startDate}
				endDate={location.endDate}
				description={location.description}
			/>
		);
	});

	return (
		<div className="App">
			<div className="navWrapper">
				<Navbar />
			</div>
			<div className="locations">{locations}</div>
		</div>
	);
}

export default App;
