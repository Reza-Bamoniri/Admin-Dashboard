import React from 'react'
import SectionTitle from '../common/SectionTitle'
import users from '../../data/users'
import UserCard from './UserCard'
import OpenInPage from './OpenInPage'

const LastUsers = () => {
  return (
    <div className="col-span-2 max-h-max">

        <SectionTitle title="Last Users"/>

        <div className='mt-6'>
            {
                users.slice(-5).map((user) => <UserCard key={user.id} {...user}/>)
            }
        </div>

        <OpenInPage route="/users"/>

    </div>
  )
}

export default LastUsers