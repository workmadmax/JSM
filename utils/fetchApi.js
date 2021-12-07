import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '4095c29064mshf4cf3b4cc0af39fp18f6a6jsnbc7aceab7592'
          }
    });

    return data;
}
