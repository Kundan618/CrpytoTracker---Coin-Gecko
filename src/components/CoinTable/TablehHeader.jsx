import React from 'react'
import TableRow from './TableRow'

const TablehHeader = ({ data }) => {
    // console.log(currency);
    return (
        <>
            <div className="my-5  w-[80vw] mx-auto">
                <div style={{gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr"}} className="w-full bg-amber-300 text-black grid py-4 px-2 font-semibold items-center justify-center sticky top-16 z-10">
                    <div className="justify-self-start">Coin</div>
                    <div className="justify-self-start">Price</div>
                    <div className="justify-self-start">24h change</div>
                    <div className="justify-self-start">Market Cap</div>
                </div>
                <TableRow data={data} />
            </div>
        </>
    )
}

export default TablehHeader
