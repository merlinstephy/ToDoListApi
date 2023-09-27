import React from 'react'
import './user.css'

const User = ({id,email,name,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
            <span>
                
                <button onClick={handleDelete} style={{color : 'white',backgroundColor : 'black'}}>delete</button>
            </span>
        </div>
    )
}

export default User