import axios from 'axios'

const postLoader = async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
	return response.data
}
export default postLoader;