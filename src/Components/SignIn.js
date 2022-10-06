import { Container, Stack } from "@mui/system";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Avatar, Select, Button, FormHelperText } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";
import { handleSetAuthedUser } from "../Actions/authUser";
import front_logo from '../front_logo.png';


const SignIn = (props) => {
  const { users } = props
  const [authedUser, setAuthUser] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAuthUser(event.target.value);
  }

  const handleSubmit = (e) => {
    dispatch(handleSetAuthedUser(authedUser))
    navigate(-1)
  }

  return (
    <Container maxWidth="md" className='border'>
      <h3>Welcome to Would You Rather App</h3>
      <p>Please sign in to continue</p>
      <img src={front_logo}
        className="App-logo"
        alt="logo"
      />
      <h2>Sign In</h2>
      <FormControl fullWidth sx={{ maxWidth: 'md', p: 0 }}>
        <FormHelperText>Select User</FormHelperText>
        <Select
          sx={{ bgcolor: '#eeeeee', p: 0, m: 0 }}
          label='Select User'
          value={authedUser}
          onChange={handleChange}
        >
          {Object.values(users).map((user) =>
            <MenuItem value={user.id} key={user.id} sx={{ m: 0, px: 2 }} >
              <Stack direction="row" >
                <Avatar sx={{ m: 0, py: 0.5, height: 65, width: 65 }} src={user.avatarURL} variant="square" />
                <p style={{ paddingTop: 4, paddingLeft: 16, fontSize: 16 }}>{user.name}</p>
              </Stack>
            </MenuItem>
          )}
        </Select>
      </FormControl>
      <Button
        type='submit'
        fullWidth={true}
        sx={{ mx: 'auto', height: 40, my: 1 }} variant="contained"
        disabled={authedUser === '' ? true : false}
        onClick={handleSubmit}
      >
        Sign In
      </Button>
    </Container>
  );
}

function mapStateToProps({ users }) {
  return {
    users: users
  }
}

export default connect(mapStateToProps)(SignIn)