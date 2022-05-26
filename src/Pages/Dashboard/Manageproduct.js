import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProduct from './DeleteProduct';
import ManageProductRow from './ManageProductRow';

const Manageproduct = () => {

    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data: products, isLoading, refetch } = useQuery(
        'products', () => fetch('http://localhost:5000/products', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl text-center'>Management All Products</h2>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th></th>
                            <th>Name</th>
                            <th>Available Quantity</th>
                            <th> Price </th>
                            <th>delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => <ManageProductRow key={index} index={index} product={product} setDeleteProduct={setDeleteProduct}></ManageProductRow>)
                        }
                    </tbody>

                </table>
            </div>
            {
                deleteProduct && <DeleteProduct API="adminProduct" deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} refetch={refetch}></DeleteProduct>
            }
        </div>
    );
};

export default Manageproduct;