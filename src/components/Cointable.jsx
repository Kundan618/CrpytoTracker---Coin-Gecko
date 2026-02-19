import React, { useContext, useState } from "react";
import { fetchCoinData } from "../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import Pagination from "./Pagination";
import TableRow from "./TableRow";
import TablehHeader from "./TablehHeader";
import { CurrencyContext } from "../context/CurrencyContext";

const Cointable = () => {
  // useEffect(() => {
  //   fetchCoinData(2, 'inr');
  // }, []);
  // console.log(currency);
  const [page, setPage] = useState(1);
  const {currency} = useContext(CurrencyContext)
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page, currency],
    queryFn: () => fetchCoinData(page, currency),
    gcTime: 1000 * 60 * 2,
    staleTime: 1000 * 60,
  });
  if (isLoading) {
    return (
      <div className="text-white text-2xl flex justify-center items-center h-64">
        Loading...
      </div>
    );
  }
  if (isError) {
    return (
      <div className="text-white text-2xl flex justify-center items-center h-64">
        Error fetching data: {error.message}
      </div>
    );
  }
  console.log(data);
  return (
    <>
      <TablehHeader data={data} currency={currency} />
      <Pagination page={page} setPage={setPage} />
     
    </>
  );
};

export default Cointable;
