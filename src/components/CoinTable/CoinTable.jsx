import Pagination from "../Pagination";
import { BulletList } from "react-content-loader";
import TablehHeader from "./TablehHeader";

const CoinTable = ({ data, currency, page, setPage, isError, isLoading, error }) => {
    if (isLoading) {
        return (
            <div className="w-[80vw] mx-auto">
                <BulletList />
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
    // console.log(data);
    return (
        <>
            <TablehHeader data={data} currency={currency} />
            <Pagination page={page} setPage={setPage} />

        </>
    );
};

export default CoinTable;

