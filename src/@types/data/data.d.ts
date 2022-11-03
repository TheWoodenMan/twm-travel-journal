declare module "src/data/data.tsx" {
	type Location = {
		title: string;
		location: string;
		googleMapsUrl: string;
		startDate: string;
		endDate: string;
		description: string;
		imageUrl: string;
	}
    type locations = Location[] 
}
