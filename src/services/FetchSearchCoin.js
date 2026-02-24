import axiosInstance from "../helpers/axiosInstance";


export async function FetchSearchCoin(query) {
    try {
        const responce = await axiosInstance.get(`/search?query=${query}`);
         console.log(responce.data.coins.map((coin) => coin.id));
        return responce.data.coins.map((coin) => coin.id);
    } catch (error) {
        console.log(error);
        return [];
    }

}