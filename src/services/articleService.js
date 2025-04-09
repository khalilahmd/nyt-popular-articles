const API_KEY = 'qSDoA0kCt8pxbWFQjToLa57TUjQ9e2Lq';
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json';

export const fetchArticles = async () => {
    try {
        const response = await fetch(`${BASE_URL}?api-key=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Failed to fetch articeles");
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error while fetching articles", error);
        throw error;
    }
};