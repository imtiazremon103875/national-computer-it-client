import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const handleSubmit = event => {
        event.preventDefault()
        const Profile = {
            name: user.displayName,
            email: user.email,
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkedin: event.target.linkedin.value,

        }
        fetch(`https://protected-spire-73262.herokuapp.com/profile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(Profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('thank you for updated profile')
                    event.target.reset()

                }
            })


    }
    return (
        <div>
            <h2 className='text-3xl text-center'>Updated Profile</h2>
            <div className="my-10">



                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4  justify-items-center mt-2' >


                    <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" required />
                    <input type="email" name="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" required />



                    <input type="text" name='education' placeholder='Add your education background' className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='location' placeholder='Add your Location' className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='phone' placeholder='Give your phone number' className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='linkedin' placeholder='Give your LinkedIn profile link' className="input input-bordered w-full max-w-xs" required />

                    <input type="submit" placeholder="Submit" className="btn btn-primary w-full max-w-xs" />
                </form>

            </div>
        </div>
    );
};

export default MyProfile;