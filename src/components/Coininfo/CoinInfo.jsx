import React from 'react'
import Alert from '../alert'
import { Chart, Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { Chart as ChartJS } from 'chart.js/auto';

const CoinInfo = ({ historicData, setDays, days, setCoinInterval, Currency, isError,isLoading }) => {

    ChartJS.register(CategoryScale);
    if(isLoading)
    if (isError) {
        return <Alert message="Error fetching data" type="error" />
    }
    if (!historicData) {
        return <Alert message="No data available" type="info" />
    }
    return (
        <div className='flex flex-col items-center justify-center  mt-6 p-5 w-full md:w-3/4'>
            <Line
                data={{
                    labels: historicData.prices.map((coinPrice) => {
                        let date = new Date(coinPrice[0]); // convert timestamp to date
                        let time = date.getHours() > 12 ?
                            `${date.getHours() - 12}:${date.getMinutes()} PM` :
                            `${date.getHours()}:${date.getMinutes()} AM`;
                        return days === 1 ? time : date.toLocaleDateString(); // show time for 1 day, date for more than 1 day
                    }),
                    datasets: [
                        {
                            label: `Price (Past ${days} Days) in ${Currency === 'inr' ? "INR" : "USD"}`,
                            data: historicData.prices.map((coinPrice) => coinPrice[1]),
                        }
                    ],
                }} />
        </div>
    )
}

export default CoinInfo
