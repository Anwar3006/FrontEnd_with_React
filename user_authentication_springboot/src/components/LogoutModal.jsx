import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import React from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LogoutModal = ({open, handleClose, handleLogout}) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
      <Box sx={style}>
        <Typography id="spring-modal-title" variant="h6" className='text-xl text-center font-semibold'>
          Are you sure you want to log out?
        </Typography>
       
        <div className='flex items-center justify-between'>

        <Button 
          variant="contained" 
          color="secondary" 
          sx={{ mt: 3, p: 2, ml: 3 }} 
          onClick={handleLogout}
          >
          Yeah
        </Button>

        <Button 
          variant="contained" 
          color="primary" 
          sx={{ mt: 3, p: 2, mr: 3 }} 
          onClick={handleClose}
          >
          Nah
        </Button>
            </div>
      </Box>
    </Fade>
      </Modal>
    </div>
  )
}

export default LogoutModal