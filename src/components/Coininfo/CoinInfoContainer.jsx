import Alert from '../alert';
import CoinInfo from './CoinInfo';
import useFetchCoinHistory from '../Hooks/usefetchCoinHistory';

const CoinInfoContainer = ({ coinId }) => {
   const [data, isLoading, isError, setCoinInterval, setDays, days, currency] = useFetchCoinHistory(coinId);
    return (
        <>
            <CoinInfo
                historicData={data}
                days={days}
                setDays={setDays}
                setCoinInterval={setCoinInterval}
                currency={currency}
                isError={isError}
                isLoading={isLoading}
            />
        </>
    )
}

export default CoinInfoContainer
