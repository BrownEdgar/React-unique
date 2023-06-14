import axios from 'axios';
import { useState, useEffect } from 'react';


export default function useFetchData(baseUrl, url, params) {
	const [data, setData] = useState(null);
	useEffect(() => {
		axios({
			baseURL: baseUrl,
			url: url,
			params
		})
		.then(res => setData(res.data))
			.catch(err => setData(err))
	}, [url])
	
	return [data, setData]
}


