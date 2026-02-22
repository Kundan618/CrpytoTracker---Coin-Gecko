import axiosInstance from "../helpers/axiosInstance";


export async function FetchSearchCoin(query) {
    try {
        const responce = await axiosInstance.get(`/search?query=${query}`);
        // console.log(responce.data);
        return responce.data;
    } catch (error) {
        // console.log(error);
        return error;
    }

}