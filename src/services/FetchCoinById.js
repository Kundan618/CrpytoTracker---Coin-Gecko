
import { CurrencyContext } from "../context/CurrencyContext";
import axiosInstance from "../helpers/axiosInstance";

export async function FetchCoinById(ids , currency) {
   
    try {
        const res = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&ids=${ids.join(",")}`);
        console.log(res.data);
        return res.data;
    }
    catch (error) {
        return error;
    }
}