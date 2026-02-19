import React from 'react'
import TableRow from './TableRow'

const TablehHeader = ({ data }) => {
    // console.log(currency);
    return (
        <>
            <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
                <div className="w-full bg-amber-800 text-black flex py-4 px-2 font-semibold items-center justify-center sticky top-16 z-10">
                    <div className="basis-[35%]">Coin</div>
                    <div className="basis-[25%]">Price</div>
                    <div className="basis-[20%]">24h change</div>
                    <div className="basis-[20%]">Market Cap</div>
                </div>
                <TableRow data={data} />
            </div>
        </>
    )
}

export default TablehHeader
