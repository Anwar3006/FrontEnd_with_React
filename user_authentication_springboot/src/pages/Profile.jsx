import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useEffect } from "react";
import { getUserProfile, logoutUser } from '../stateManager/Action';
import { Button } from '@mui/material';
import LogoutModal from '../components/LogoutModal';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);


  const auth = useSelector((store) => store.auth);
  useEffect(() => {
    if (auth.jwt) {
    dispatch(getUserProfile());
  }
    }, [auth.jwt, dispatch]);

    const openLogoutModal = () => {
        setOpen(true);
    }
    const handleLogout = () => {
        dispatch(logoutUser(navigate));
    }

  return (
    <div className='flex flex-col items-center justify-center h-[100vh] w-[100vw]'>
        <div>
            <p className='text-3xl font-semibold'>{auth.user ? auth.user.fullName : "Guest"}</p>
            <span> {auth.user ? "This is your account." : "" }</span>
        </div>

        <div className='mt-5 flex items-center justify-center'>
            <Button variant='contained' onClick={openLogoutModal} color='error' className='px-5 py-1'>Logout</Button>
            <LogoutModal open={open} handleClose={() => setOpen(false)} handleLogout={handleLogout} />
        </div>
    </div>
  )
}

export default Profile