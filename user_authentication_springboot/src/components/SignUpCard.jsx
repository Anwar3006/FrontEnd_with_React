import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../stateManager/Action'
import AuthModal from './AuthModal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 6
}
const initialState = {
    fullName: "",
    email: "",
    password: "",
    role: "ROLE_USER"
}

const SignUpCard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {modalOpen} = useSelector((state) => state.auth);

    const handleSubmit = (values) => {
        localStorage.removeItem("token");
        console.log(localStorage.getItem("token"));
        dispatch(registerUser(values));
    }
    const handleClose = () => {
        dispatch({ type: "AUTH_MODAL_CLOSE" });
    }

  return (
    <Box style={style} className='w-2/3 lg:max-w-[35rem] p-5 rounded-md' sx={{ backgroundColor: "background.paper" }}>
        <Typography variant='h4' className='text-center pb-5 font-semibold'>
            SignUp
        </Typography>
        <Formik initialValues={initialState} onSubmit={handleSubmit}>
            {({handleChange, values}) =>
            <Form>
                <Field as={TextField} name="fullName" label="Full Name" variant="outlined" fullWidth margin="normal" value={values.fullName} onChange={handleChange} />
                <Field as={TextField} name="email" label="Email" variant="outlined" fullWidth margin="normal" value={values.email} onChange={handleChange} />
                <Field as={TextField} name="password" label="Password" variant="outlined" fullWidth type="password" margin="normal" value={values.password} onChange={handleChange}/>
                <Field as={Select} name="role" label="Role" variant="outlined" fullWidth sx={{ mt: 2 }} value={values.role} onChange={handleChange}>
                    <MenuItem value={"ROLE_ADMIN"}>Admin</MenuItem>
                    <MenuItem value={"ROLE_USER"}>User</MenuItem>
                </Field>

                <Button variant='contained' type='submit' sx={{mt: 2, mb: 3, padding: "1rem"}} fullWidth>
                    Register
                </Button>
            {
                modalOpen && ( <AuthModal open={modalOpen} handleClose={handleClose} email={values.email} /> )
            }
            </Form> }
        </Formik>

        <Typography variant='body2' className='text-center mt-5'>
            Already have an account?
            <span onClick={() => navigate("/auth/signin")} className='text-blue-500 cursor-pointer'>
               {" "} Login
            </span>
        </Typography>
    </Box>
  )
}

export default SignUpCard