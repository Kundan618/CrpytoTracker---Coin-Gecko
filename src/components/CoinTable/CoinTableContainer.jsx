import { useContext, useState } from "react";
import { fetchCoinData } from "../../services/FetchCoinData";
import { useQuery } from "@tanstack/react-query";
import { CurrencyContext } from "../../context/CurrencyContext";
import CoinTable from "./CoinTable";
import { SearchContext } from "../../context/SearchContext";
import { FetchSearchCoin } from "../../services/FetchSearchCoin";
import { FetchCoinById } from "../../services/FetchCoinById";


const CoinTableContainer = () => {
    const [page, setPage] = useState(1);
    const { currency } = useContext(CurrencyContext);
    const { searchQuery } = useContext(SearchContext);
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["coins", page, currency, searchQuery],
        queryFn: async () => {
            // normal list 
            if (!searchQuery) {
                return fetchCoinData(page, currency);
            }
            // search mode
            const ids = await FetchSearchCoin(searchQuery);
            if (ids.length === 0) return [];
            return FetchCoinById(ids, currency);
        },
        
        gcTime: 1000 * 60 * 2,
        staleTime: 1000 * 60,
    });
    console.log(data);
    return (
        <CoinTable
            data={data}
            currency={currency}
            page={page}
            setPage={setPage}
            isError={isError}
            isLoading={isLoading}
            error={error}
        />
    );
};

export default CoinTableContainer;
