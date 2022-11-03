type Location = {
	title: string;
	location: string;
	googleMapsUrl: string;
	startDate: string;
	endDate: string;
	description: string;
	imageUrl: string;
};

const locations: Location[] = [
	{
		title: "Hoover Dam",
		location: "USA",
		googleMapsUrl: "https://goo.gl/maps/M9219TNQwScp1cjh6",
		startDate: "12 Jan, 2018",
		endDate: "12 Jan, 2018",
		description:
			"Depression-era engineering marvel offering tours & scenic views of the Colorado River & Lake Mead.",
		imageUrl: "/hooverdam2.avif"
	},
	{
		title: "Quinta da Regaleira",
		location: "Portugal",
		googleMapsUrl: "https://g.page/quinta-da-regaleira?share",
		startDate: "16 Apr, 2022",
		endDate: "16 Apr, 2022",
		description:
			"Early 20th century-built palace & gardens with underground passages, a chapel & museum, plus events.",
		imageUrl: "/quintadaregaleira.avif"
	},
	{
		title: "Grand Canyon",
		location: "USA",
		googleMapsUrl: "https://goo.gl/maps/geDNhR285s5Thnw5A",
		startDate: "13 Jan, 2018",
		endDate: "13 Jan, 2018",
		description:
			"Beyond its scenic overlooks, this mile-deep geologic wonder features hikes, mule rides & rafting.",
		imageUrl: "/grandcanyon.avif"
	}
];

export default locations;
