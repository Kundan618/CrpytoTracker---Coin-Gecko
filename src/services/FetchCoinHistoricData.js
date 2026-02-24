import axiosInstance from "../helpers/axiosInstance";


export default async function fetchCoinHistoricData(id, interval, days = 7, currency = 'inr') {
    try {
        const responce = await axiosInstance.get(`/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`);
        // console.log(responce.data);
        return responce.data;
    } catch (error) {
        // console.log(error);
        return error;
    }

}