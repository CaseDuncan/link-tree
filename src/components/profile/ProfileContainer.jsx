import React from 'react'
import users from '../../users/users'
import { Link } from 'react-router-dom'

const ProfileContainer = () => {
  return (
      <div className='container'>
          <div className="row">
              {users.map((user) => (
                  <div className="col-md-3" key={user.id}>
                      <h3>{user.name}</h3>
                      <Link to={`/profile/${user.id}`} className='btn btn-secondary'>view Profile</Link>
                      
                      {/* <a href={user.twitter} className='btn btn-primary mb-2'>twitter</a> <br />
                      <a href={user.github} className='btn btn-primary'>twitter</a> */}
                     
                      
              </div>
              ))}
          </div>
    </div>
  )
}

export default ProfileContainer