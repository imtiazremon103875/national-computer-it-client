import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';


const Parchase = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams();
    const [detail, setDetail] = useState({})
    const { name, description, image, minimumOderQuantity, availableQuantity, price } = detail;
    const [item, setItem] = useState(null)
    const [totalPrice, setTotalPrice] = useState('')
    const [errorMessage, setErrorMessage] = useState("")


    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [id])

    const handleOrder = event => {
        event.preventDefault();
        const order = {
            product: name,
            image,
            customer: user.displayName,
            email: user.email,
            quantity: event.target.quantity.value,
            totalPrice,
            phone: event.target.phone.value,
        }
        console.log(order)
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast("your order is processing,please pay")
                }
                else {
                    toast('There is an problem in your order')
                }
            })

    }
    let quantityError;
    const handleQuantity = event => {
        const quantity = event.target.value;
        if (quantity < minimumOderQuantity) {
            setErrorMessage("Quantity can not lower than minimumQuantity")
        }
        else if (quantity > availableQuantity) {
            setErrorMessage("Quantity can not higher than availableQuantity")
        }
        else {
            setErrorMessage("")
        }
        setTotalPrice(quantity * price)
    }
    return (
        <div className='px-6'>
            <div className="card  bg-base-200 shadow-xl ">
                <figure><img className='w-44' src={image} alt="Album" /></figure>
                <div className="card-body text-center">
                    <h2 >{name}</h2>
                    <p><span className='font-bold'>Description:</span> {description}</p>
                    <p> <span className='font-bold'>Minimum Order quantity: </span>{minimumOderQuantity}</p>
                    <p> <span className='font-bold'>Available Quantity:</span>{availableQuantity}</p>
                    <p> <span className='font-bold'>price (per unit):</span>{price}</p>

                </div>
            </div>

            <div className="my-10">

                <h3 className="font-bold text-lg  text-primary text-center">Booking for: {name}</h3>

                <form onSubmit={handleOrder} className='grid grid-cols-1 gap-4  justify-items-center mt-2' >


                    <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" required />
                    <input type="email" name="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                    {errorMessage && <div className="error"> {errorMessage} </div>}

                    <input type="number" onChange={handleQuantity} name="quantity" placeholder="quantity" className="input input-bordered w-full max-w-xs" required />
                    <input type="number" value={totalPrice} readOnly name="totalprice" placeholder="Total price" className="input input-bordered w-full max-w-xs" required />
                    {errorMessage ? <input type="submit" placeholder="Submit" disabled className="btn btn-primary w-full max-w-xs" /> : <input type="submit" placeholder="Submit" className="btn btn-primary w-full max-w-xs" />}
                </form>

            </div>
        </div>



    );
};

export default Parchase;