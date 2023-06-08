import axios from "axios";

const instance =  axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 1500,
	timeoutErrorMessage: "check network connection",
})
export default instance