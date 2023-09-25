import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiYXhlbHk3IiwiYSI6ImNsOW9hcG14cTBlZmszb2w4aTEyY25zMHMifQ.27Y7c546x0Jd3smqm03uvg'
    }
});

export default searchApi;