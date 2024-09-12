import { Box, Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../stateManager/Action'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 6
}

const initialState = {
    email: "",
    password: ""
}

const SignInCard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(loginUser({values, navigate}))
    }

  return (
    <Box style={style} className='w-2/3 lg:max-w-[35rem] p-5 rounded-md' sx={{ backgroundColor: "background.paper" }}>
        <Typography variant='h4' className='text-center pb-5 font-semibold'>
            SignIn
        </Typography>

        <Formik initialValues={initialState} onSubmit={handleSubmit}>
            {({handleChange, values}) => 
            <Form>    
                <Field as={TextField} name="email" label="Email" variant="outlined" fullWidth margin="normal" autoComplete="on" value={values.email} onChange={handleChange} />
                <Field as={TextField} name="password" label="Password" variant="outlined" fullWidth type="password" margin="normal" value={values.password} onChange={handleChange}/>
                <Button variant='contained' type='submit' sx={{mt: 2, mb: 3, padding: "1rem"}} fullWidth>
                    Login
                </Button>
            </Form>
}
        </Formik>

        <Typography variant='body2' className='text-center mt-5'>
            Don't have an account?
            <span onClick={() => navigate("/auth/signup")} className='text-blue-500 cursor-pointer'>
               {" "} Register
            </span>
        </Typography>
    </Box>
  )
}

export default SignInCard