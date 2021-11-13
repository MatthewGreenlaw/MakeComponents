import { useState } from 'react';
import get from '../../Common/api/get';
const siteRoot = '/';

const useGetApi = (endpoint) => {
    const [ data, setData ] = useState(null);
    
    get(siteRoot + endpoint)
        .then(res => res.json())
        .then(setData)
        .fail(console.error);

    return data;
};

export default useGetApi;