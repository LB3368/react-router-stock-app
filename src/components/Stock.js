import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import stockData from '../data';

export default function Stock() {

    const [stock, setStock] = useState(null);
    const { symbol } = useParams();



    useEffect(() => {
        const getStock = async () => {
            try {
                const data = stockData.find(theStock => theStock.symbol === symbol);
                setStock(data);
            } catch (error) {
                console.error(error);
            }
        }

        getStock();
    }, [symbol]);



    const loaded = () => {
        return (
            <div>
                <h2>{stock.name} / {stock.symbol}</h2>
                <h3>${stock.lastPrice}</h3>
            </div>
        )
    }

    const loading = () => {
        return (
            <h2>...Loading...</h2>
        )
    }

    return (
        stock && stock.name ? loaded() : loading()
    )
}