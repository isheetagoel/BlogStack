import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BiLogOut } from "react-icons/bi"
import { RiImageAddLine } from "react-icons/ri"
import { Link } from "react-router-dom"

export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)
  
  const close = () => {
    setProfileOpen(false)
  }
  
  return (
    <div className='profile'>
      {user ? (
        <>
          <button 
            className='user-button' 
            onClick={() => setProfileOpen(!profileOpen)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#0f3460',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            IG
          </button>
          
          {profileOpen && (
            <div className='openProfile boxItems' onClick={close}>
              <Link to='/account'>
                <button className='box'>
                  <IoSettingsOutline className='icon' />
                  <h4>My Account</h4>
                </button>
              </Link>
              <Link to='/create'>
                <button className='box'>
                  <RiImageAddLine className='icon' />
                  <h4>Create Post</h4>
                </button>
              </Link>
              <Link to='/'>
                <button className='box'>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </Link>
            </div>
          )}
        </>
      ) : (
        <button>My Account</button>
      )}
    </div>
  )
}
