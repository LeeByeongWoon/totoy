import Axios from 'axios';

export async function getStores() {
    const response = await Axios.get('http://localhost:8080/restaurants');
    return response.data;
}
export async function getStore(id: number) {
    const response = await Axios.get(`http://localhost:8080/restaurants/${id}`)
    return response.data;
}

export async function postStore(name: string, address: string) {
    const response = await Axios.post('http://localhost:8080/restaurants', {
        header: {
            "contents-type": "application/json",
        },
        withCredentials: true,
        name,
        address
    });
    console.log(response.data);
    return response.data;
}
export async function patchStore(id: number) {
    const response = await Axios.post(`http://localhost:8080/restaurants/${id}`)
    return response.data;
}