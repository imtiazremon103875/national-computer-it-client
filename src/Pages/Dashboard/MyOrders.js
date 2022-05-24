import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import OrdersRaw from './OrdersRaw';

const MyOrders = () => {
    const [orders, setOrders] = useState([])


    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
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
                })
                .then(data => setOrders(data))
        }

    }, [user, navigate])

    return (
        <div>
            <h2 className='text-3xl text-center'>My Orders</h2>
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
                            orders.map((order, index) => <OrdersRaw key={index} index={index} order={order}></OrdersRaw>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;