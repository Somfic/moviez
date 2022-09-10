import { Models } from "./models";

let cachedResponse: [Models.Movies | undefined, Date] = [undefined, new Date(0)];
const cacheDuration = 10; // seconds

export async function fetchShowings(): Promise<Models.Showing[]> {
    const movies = await fetchMovies();

    const today = new Date(Date.now());
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    // Filter showings that are today
    const validSessions = movies.sessions.filter((s) => s.complexOperator === Models.ComplexOperator.Dord && new Date(s.showtime) > today && new Date(s.showtime) < tomorrow);
    // Get the unique IDs of the movies that are playing
    const filmIds = new Set(validSessions.map((f) => f.film.id));

    // Group sessions by film
    let showings: Models.Showing[] = [];
    filmIds.forEach((filmId) => {
        const film = movies.films.find((f) => f.id === filmId);
        const sessions = validSessions.filter((s) => s.film.id === filmId).sort((a, b) => new Date(a.showtime).getTime() - new Date(b.showtime).getTime());
        showings.push({ film: film!, sessions: sessions });
    });

    return showings;
}

async function fetchMovies(): Promise<Models.Movies> {
    let maxDate = new Date(Date.now() - cacheDuration * 1000);

    // Return cached response if it has not expired
    if (cachedResponse[0] !== undefined && cachedResponse[1] > maxDate) {
        return cachedResponse[0];
    }

    // Fetch new response
    const response = await fetch("https://kinepolisweb-programmation.kinepolis.com/api/Programmation/NL/NL/www/Cinema/KinepolisTheNetherlands");

    return await response.json();
}
