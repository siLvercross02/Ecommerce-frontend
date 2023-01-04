import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzZlMzQzNWNhN2IzNTJmZDhkZWRhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODk4NDkyMiwiZXhwIjoxNjQ5MjQ0MTIyfQ.Yi2RnURcZIPhgCVuzS5m5PNk7mt_7Hc1AuFz1A5lkJI";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});