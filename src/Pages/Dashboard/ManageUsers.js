import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageUserRow from './ManageUserRow';

const ManageUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('https://protected-spire-73262.herokuapp.com/user', {
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
            <h2 className='text-3xl text-center'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Remove user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <ManageUserRow key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            >

                            </ManageUserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;