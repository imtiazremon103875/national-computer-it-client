import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3mclFFT9gx8s0EvyPZ9hFxhXeb5osg8wP1TUgidGNnCAJcz4IV513eqEDwpWc5Ohaos7hh184IQ8AVkFnyh2M500ESqGHYS2');

const Payment = () => {
    const { id } = useParams();

    const url = `http://localhost:5000/order/${id}`
    const { data: order, isLoading } = useQuery(['paymentOrder', id], () => fetch(url, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl text-center mb-10'>Payment page </h2>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title"> Pay for {order.product}</h2>
                    <p>Please pay for <span className='text-orange-700'>{order.totalPrice} </span>taka to confirm order</p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;