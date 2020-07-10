import Axios from 'axios';

export async function getStores() {
    const response = await Axios.get('http://localhost:8080/restaurants');
    return response.data;
}
export async function getStore(id: number) {
    const response = await Axios.get(`http://localhost:8080/restaurants/${id}`)
    return response.data;
}