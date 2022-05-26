import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageProductRow = ({ product, index, setDeleteProduct }) => {
    const { name, image, availableQuantity, price } = product
    return (

        <tr>
            <td>{index + 1}</td>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{name}</div>

                    </div>
                </div>
            </td>

            <td>{availableQuantity}</td>
            <td>{price}</td>
            <th>
                <label onClick={() => setDeleteProduct(product)} htmlFor='delete-modal'><FontAwesomeIcon icon={faTrash} /></label>
            </th>

        </tr>

    );
};

export default ManageProductRow;