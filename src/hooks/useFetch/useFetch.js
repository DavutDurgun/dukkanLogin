import axios from "axios";
import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            setIsLoading(false);
            setError(null);
            setData(responseData);
        } catch (err) {
            setIsLoading(false);
            setError(err.message);
            setData([]);
        }
    }

    useEffect(() => {
        getData();
        return () => {
            setIsLoading(true);
            setError(null);
            setData([]);
        }
    }, []);

    return { error, isLoading, data };
}

export default useFetch;