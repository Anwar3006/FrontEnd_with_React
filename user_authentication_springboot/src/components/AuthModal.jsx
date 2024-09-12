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

const AuthModal = ({open, handleClose, email}) => {

    const openMailProvider = () => {
        const domain = email.split('@')[1];
        let mailUrl = "";

        switch (domain) {
            case "gmail.com":
                mailUrl = 'https://mail.google.com';
                break;
            case 'outlook.com':
            case 'hotmail.com':
                mailUrl = 'https://outlook.live.com';
                break;
            case 'yahoo.com':
                mailUrl = 'https://mail.yahoo.com';
                break;
            default:
                mailUrl = 'https://www.google.com/search?q=login+' + domain; // Search for the login page
                break;
        
        }

        // Open the mail provider in a new tab
    window.open(mailUrl, '_blank');
    }

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
        <Typography id="spring-modal-title" variant="h6" component="h2" className='text-center font-semibold'>
          Verify Your Email
        </Typography>
        <Typography id="spring-modal-description" sx={{ mt: 2 }} className='text-center'>
          Click the button below to open your email provider and verify your email.
        </Typography>
        <div className='flex items-center justify-center'>

        <Button 
          variant="contained" 
          color="primary" 
          sx={{ mt: 3, p: 2 }} 
          onClick={openMailProvider}
          >
          Open Email Provider
        </Button>
            </div>
      </Box>
    </Fade>
      </Modal>
    </div>
  )
}

export default AuthModal