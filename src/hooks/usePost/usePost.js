import { useState } from 'react';
import axios from 'axios';

const usePost = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const post = async (url, sendData) => {
        try {
            setData(null);
            setError(null);
            setLoading(true);
            const { data: responseData } = await axios.post(url, sendData);
            setData(responseData);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
            setData(null);
        }
    }


    return { data, loading, error, post };
}

export default usePost;