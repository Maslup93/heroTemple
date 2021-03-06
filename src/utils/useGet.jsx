import {useState, useEffect} from 'react';
import axios from 'axios';


const useGet = ({url, params = {}, initialState = []}) => {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        const get = async () => {
            try {
                const res = await axios.get(url, params);

                setData(res.data.results || [])
                console.log(data)
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false);
            }
        }
        get()
    }, [url]);

    return [data, loading, error]
}


export default useGet;
