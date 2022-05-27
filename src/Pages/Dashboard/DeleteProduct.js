import React from 'react';
import { toast } from 'react-toastify';

const DeleteProduct = ({ deleteProduct, setDeleteProduct, refetch, API }) => {
    const { _id } = deleteProduct;
    const handleDelete = () => {
        fetch(`https://protected-spire-73262.herokuapp.com/${API}/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("This order is successfully delete")
                    setDeleteProduct(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className='font-bold text-lg'>Are You Sure Want to Delete this product?</h3>
                    <div className="modal-action">
                        <button onClick={handleDelete} className='btn btn-error'> Delete</button>
                        <label htmlFor="delete-modal" className="btn   btn-success">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;