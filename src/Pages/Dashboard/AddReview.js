import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handleSubmit = event => {
        event.preventDefault()
        const myReview = {
            name: user.displayName,
            email: user.email,
            review: event.target.reviewText.value,
            ratings: event.target.star.value,

        }
        fetch(`https://protected-spire-73262.herokuapp.com/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(myReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('thank you for valuable review')
                    event.target.reset()

                }
            })

    }
    return (
        <div>
            <h2 className='text-3xl text-center'>My Review</h2>
            <div className="my-10">



                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4  justify-items-center mt-2' >


                    <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" required />
                    <input type="email" name="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" required />


                    <textarea placeholder=" Give Review Description" name='reviewText' className="textarea textarea-bordered w-80" required></textarea>
                    <input type="text" name='star' placeholder='How many star you give  out of 5' className="input input-bordered w-full max-w-xs" required />

                    <input type="submit" placeholder="Submit" className="btn btn-primary w-full max-w-xs" />
                </form>

            </div>
        </div>
    );
};

export default AddReview;