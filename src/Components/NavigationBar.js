import { Stack } from '@mui/system'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { Avatar, Divider, Button, Container } from '@mui/material';
import { handleSetAuthedUser } from '../Actions/authUser';

const NavigationBar = (props) => {
  const { name, avatar } = props
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(handleSetAuthedUser(null))
    navigate('/');
  };

  return (
    <Container>
      <Stack spacing={2} direction='row' justifyContent="center" alignItems='center' sx={{ pt: 3 }}>
        <NavLink to='/' className='active' >
          Home
        </NavLink>
        <NavLink to='/new' className='active'>
          New Question
        </NavLink>
        <NavLink to='/leaderboard' className='active'>
          Leaderboard
        </NavLink>
        <h4>Welcome {name} </h4>
        <Avatar src={avatar} variant="square" />
        <Button
          onClick={handleSignOut}
          variant='text'
          size='large'>Sign out
        </Button>
      </Stack>
      <Divider variant="middle" sx={{ my: 2 }} />
    </Container>
  );
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    name: authedUser !== null ? users[authedUser].name : '',
    avatar: authedUser !== null ? users[authedUser].avatarURL : '',
  }
}

export default connect(mapStateToProps)(NavigationBar);