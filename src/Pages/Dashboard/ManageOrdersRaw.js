import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ManageOrdersRaw = ({ order, index, setDeleteProduct }) => {
    const [status, setStatus] = useState("unpaid")
    useEffect(() => {
        if (order?.paid) {
            setStatus('panding')
        }
    }, [order])
    return (

        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={order.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{order.product}</div>
                        <div className="text-sm opacity-50">{order.email}</div>
                    </div>
                </div>
            </td>

            <td>{order.quantity}</td>
            <td>{order.totalPrice}</td>
            <th>
                <label onClick={() => status === 'unpaid' ? setDeleteProduct(order) : setDeleteProduct('')} htmlFor='delete-modal'><FontAwesomeIcon className={status !== 'unpaid' ? 'opacity-25' : ''} icon={faTrash} /></label>
            </th>
            <th>
                <button className='btn btn-xs font-bold'>
                    {status}
                </button>
            </th>
            <th>
                <button onClick={() => status === 'panding' && setStatus('shipped')} className='btn btn-xs font-bold' >
                    {status === 'shipped' && 'Already Shipped'}
                    {status === 'panding' && 'make shipped'}
                    {status === 'unpaid' && 'message user'}
                </button>
            </th>
        </tr>

    );
};

export default ManageOrdersRaw;