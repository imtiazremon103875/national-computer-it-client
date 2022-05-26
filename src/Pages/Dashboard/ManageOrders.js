import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProduct from './DeleteProduct';
import ManageOrdersRaw from './ManageOrdersRaw';

const ManageOrders = () => {
    const [deleteProduct, setDeleteProduct] = useState(null)
    const { data: allOrders, isLoading, refetch } = useQuery(
        "allOrders", () => fetch('http://localhost:5000/allOrders', {
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
            <h2 className='text-3xl text-center'>Manage All Orders</h2>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th></th>
                            <th>Name</th>
                            <th>quantity</th>
                            <th>Total price </th>
                            <th>delete</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allOrders.map((order, index) => <ManageOrdersRaw key={index} index={index} order={order} setDeleteProduct={setDeleteProduct}></ManageOrdersRaw>)
                        }
                    </tbody>

                </table>
            </div>
            {
                deleteProduct && <DeleteProduct API='userProduct' deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} refetch={refetch}></DeleteProduct>
            }

        </div>
    );
};

export default ManageOrders;