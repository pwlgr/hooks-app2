export interface Planet {
	name: string;
	planets: any;
}

export interface Film {
	title: string;
	planets: Array<object>;
}
export type Films = {
	films: Array<Film>;
};

export interface AddFilm {
	addFilm: (Film) => void;
	name: string;
}
