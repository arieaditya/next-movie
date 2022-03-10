import axios from 'axios'
const APIKey = process.env.NEXT_PUBLIC_API_KEY

export const getBrowse = async (keyword, page) => {
    try {
        const response = await axios.get(`https://www.omdbapi.com?s=${keyword}&apikey=${APIKey}&page=${page}`)
        return response
    } catch (error) {
        console.error(error.message);
    }
};

export const getMovieDetail = async (uri) => {
    try {
        const response = await axios.get(`https://www.omdbapi.com?i=${uri}&apikey=${APIKey}`)
        return response
    } catch (error) {
        console.error(error.message);
    }
}