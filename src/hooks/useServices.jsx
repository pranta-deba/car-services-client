import axios from 'axios';
import { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/services`)
            setServices(data)
        }
        getData()
    }, [])
    return services
};

export default useServices;