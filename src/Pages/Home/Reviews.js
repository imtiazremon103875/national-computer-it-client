import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews',
        () => fetch(`https://protected-spire-73262.herokuapp.com/review`, {
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
        <div className=''>
            <h2 className='text-center text-4xl text-black my-8'>Review of Customer</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6'>
                {
                    reviews.map(review => <div key={review._id} className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <div className="avatar">
                                <div className="w-24 rounded">
                                    <img src="https://www.linguahouse.com/linguafiles/md5/dffc7c11db1ed97d6028d315b70c5cd7" alt='' />
                                </div>
                            </div>
                            <h2 className="card-title"> Name:{review.name}</h2>
                            <p className='text-primary'>Description:{review.review}</p>

                            <div>
                                {
                                    [...Array(parseInt(review.ratings)).keys()].map
                                        ((number, index) => <span key={index} className='mr-2 text-white'><FontAwesomeIcon icon={faStar} /></span>)
                                }
                            </div>


                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;