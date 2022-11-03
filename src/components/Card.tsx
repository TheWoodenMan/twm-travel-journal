import React, { FunctionComponent } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";

import "./Card.css";

function Card(props: {
	imageUrl: string | undefined;
	title: string | undefined;
	location: string | undefined;
	googleMapsUrl: string | undefined;
	startDate: string | undefined;
	endDate: string | undefined;
	description: string | undefined;
}) {
	return (
		<section className="Card">
			<div className="imageContainer">
				<img src={props.imageUrl} alt={props.title} />
			</div>
			<div className="textContainer">
				<span className="locationLinks">
					<span className="arrowIcon">
						<TiLocation />
					</span>{" "}
					<span className="location">{props.location} </span>
					<a target="_blank" href={props.googleMapsUrl}>
						<span className="googleLink">View on Google Maps</span>
					</a>
				</span>
				<h2 className="title">{props.title}</h2>
				<span className="dateRange">
					{props.startDate} - {props.endDate}
				</span>
				<p className="description">{props.description}</p>
			</div>
		</section>
	);
}

export default Card;
