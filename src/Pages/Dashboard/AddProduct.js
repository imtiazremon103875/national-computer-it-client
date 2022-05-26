import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const [imageData, setImageData] = useState({})
    const imageStorageKey = '860949bfe916b5091c2349f950c85102'

    const handleImage = event => {
        const f = event.target.files
        setImageData(f[0])

    }
    const handleSubmit = event => {
        event.preventDefault()
        const image = imageData;
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: event.target.name.value,
                        image: img,
                        description: event.target.description.value,
                        availableQuantity: parseInt(event.target.available.value),
                        minimumOderQuantity: parseInt(event.target.available.value),
                        price: parseInt(event.target.price.value)
                    }
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                                event.target.reset();
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })

                }

            })
    }
    return (
        <div>
            <h2 className='text-3xl text-center'>Add a Product</h2>
            <div className="my-10">

                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4  justify-items-center mt-2' >
                    <input type="text" name='name' placeholder='Name' className="input input-bordered w-full max-w-xs" required />
                    <input onChange={handleImage} type="file" name='image' className="input input-bordered w-full max-w-xs" required />
                    <textarea placeholder=" Give  Description" name='description' class="textarea textarea-bordered w-80" required></textarea>
                    <input type="text" name='price' placeholder='Price' className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='available' placeholder='Avilable quantity' className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='minimum' placeholder='Minimum quantity' className="input input-bordered w-full max-w-xs" required />

                    <input type="submit" placeholder="Submit" className="btn btn-primary w-full max-w-xs" />
                </form>

            </div>
        </div>
    );
};

export default AddProduct;