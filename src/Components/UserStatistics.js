import { Avatar, Divider } from "@mui/material";
import { Box, Stack, Container } from "@mui/system";
import React from "react";

const UserStatistics = props => {
  const { user } = props

  return (
    <Container maxWidth="md" className='border'>
      <Stack direction='row' justifyContent="space-between">
        <Avatar sx={{ width: 175, height: 175, m: 2 }} src={user.avatar} />
        <Divider orientation="vertical" flexItem />
        <Container maxWidth="sm" >
          <h2>{user.name}</h2>
          <Stack direction='row' justifyContent="space-between">
            <p>Answered questions</p>
            <p>{user.answers}</p>
          </Stack>
          <Divider />
          <Stack direction='row' justifyContent="space-between">
            <p style={{ float: "left" }}>Created questions</p>
            <p style={{ float: "right" }}>{user.questions}</p>
          </Stack>
        </Container>

        <Stack >
          <Box className='border'>
            <h2>Score</h2>
            <Divider />
            <Avatar
              sx={{ width: 100, height: 100, p: 2, m: 1, bgcolor: 'rgb(66, 135, 245)' }}
            >
              {user.questions + user.answers}
            </Avatar>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

export default UserStatistics;
