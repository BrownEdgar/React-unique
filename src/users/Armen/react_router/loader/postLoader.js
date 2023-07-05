import axios from 'axios';

const productLoader = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default productLoader;
