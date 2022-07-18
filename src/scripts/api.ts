import {
	ComplexOperator,
	MoviesConverter,
	Movies,
	Session,
	Film,
	Showing,
} from "./models/movies";

let cachedResponse: [Movies | undefined, Date] = [undefined, new Date(0)];
const cacheDuration = 10; // seconds

export async function fetchShowings(): Promise<Showing[]> {
	const movies = await fetchMovies();

	const now = new Date(Date.now());
	const midnight = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate() + 2
	);

	// Filter showings that are today
	const validSessions = movies.sessions.filter(
		(s) =>
			s.complexOperator == ComplexOperator.Dord &&
			s.showtime > now &&
			s.showtime < midnight
	);

	// Get the ID of the movies that are playing
	const films = validSessions
		.map((s) => s.film.id)
		.reduce((a, b) => {
			if (a.indexOf(b) < 0) a.push(b);
			return a;
		}, []);

	let showings: Showing[] = [];

	films.forEach((filmId) => {
		const film = movies.films.find((f) => f.id == filmId);
		const sessions = validSessions
			.filter((s) => s.film.id == filmId)
			.sort((a, b) => a.showtime.getTime() - b.showtime.getTime());
		showings.push(new Showing(film, sessions));
	});

	return showings;
}

async function fetchMovies(): Promise<Movies> {
	let maxDate = new Date(Date.now() - cacheDuration * 1000);

	// Return cached response if it is not expired
	if (cachedResponse[0] != undefined && cachedResponse[1] > maxDate) {
		return cachedResponse[0];
	}

	// Fetch new response
	const response = await fetch(
		"https://kinepolisweb-programmation.kinepolis.com/api//Programmation/NL/NL/www/Cinema/KinepolisTheNetherlands"
	);

	const body = await response.json();
	const json = JSON.stringify(body);
	const movies = MoviesConverter.fromJson(json);

	cachedResponse = [movies, new Date(Date.now())];

	return movies;
}
