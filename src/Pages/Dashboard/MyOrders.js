import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import OrdersRaw from './OrdersRaw';
import { useQuery } from 'react-query';
import Loading from "../Shared/Loading"
import DeleteProduct from './DeleteProduct';

const MyOrders = () => {
    const [deleteProduct, setDeleteProduct] = useState(null)
    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/order?email=${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                localStorage.removeItem('accessToken')
                navigate('/login')

            }
            return res.json()
        }))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl text-center'>My Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

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
                            orders.map((order, index) => <OrdersRaw key={index} index={index} order={order} setDeleteProduct={setDeleteProduct}></OrdersRaw>)
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

export default MyOrders;