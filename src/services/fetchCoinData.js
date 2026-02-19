import axiosInstance from "../helpers/axiosInstance";


export async function fetchCoinData(page= 1, currency = 'inr') {
    try {
        const responce = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&per_page=10&page=${page}`);
        // console.log(responce.data);
        return responce.data;
    } catch (error) {
        // console.log(error);
        return error;
    }

}