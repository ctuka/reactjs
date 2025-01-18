import React from 'react'

export default function Jsx2() {

    const isLoading = true;

    const isAdmin = false;

  return (
    <div>
        { isLoading ? (
            <>
                <h2>Loading...</h2>
                <p>It may take some time...</p>
            </>
            
        ) : (
            <>
                <h2>Data is fetched successfully</h2>
                <p>Please map the data...</p>
            </>
            
        )}

        {
            isAdmin && ( //Second way of use
                <div>
                    <h2>Admin Panel</h2>
                    <ul>
                        <li>Create User</li>
                        <li>Update User</li>
                        <li>Delete User</li>
                    </ul>
                </div>
            )
        }
    </div>
  )
}
