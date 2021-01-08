import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { OrderLocationdata, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);



    return (
        <>
            <StepsHeader />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </>
    )
}

export default Orders;