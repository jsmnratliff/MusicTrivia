import React from 'react';

axios.defaults.baseURL = "https://rapidapi.com/"

const Axios = () => {
    const [response, setResponse] = useState(null);
    const [error,setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            axios
                .ger(url)
                .then(res => setResponse(res.data))
                .catch(err => setError(err))
                .finally(() => setLoading(false))
        }
        fetchData();
    },  [URL]);

    return {response,error,loading}
}

export default Axios