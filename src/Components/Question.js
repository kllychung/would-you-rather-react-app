import { Avatar, Box, Button, Container, Divider } from "@mui/material"
import { Stack } from "@mui/system"
import { connect } from "react-redux"
import { formatQuestion } from '../Utils/helper'
import { Navigate } from 'react-router-dom';
import React, { useState } from 'react'

const Question = (props) => {
  const [toViewQuestion, setToViewQuestion] = useState(false);
  const { question, answered } = props

  const navLink = '/questions/'.concat(question.id)

  const handleClick = (e) => {
    setToViewQuestion(true)
  }

  return (
    toViewQuestion ? <Navigate to={navLink} /> :
      <Box sx={{ border: 2, borderColor: '#cfe8fc', borderRadius: 2, mx: 'auto', p: 2, my: 2 }} maxWidth="sm">
        <div>
          <h3>{props.question.name} asks:</h3>
          <Divider />
        </div>
        <Stack direction="row" sx={{ p: 0, m: 0 }}>
          <Avatar src={question.avatar}
            sx={{ width: 175, height: 175, m: 2 }}
          />
          <Divider orientation="vertical" flexItem />
          <Container sx={{ m: 2, py: 1 }}>
            <h3 style={{ textAlign: "left" }}>Would you rather</h3>
            <p style={{ textAlign: "left" }}>{props.question.optionOneText}</p>
            <Button
              type='submit'
              fullWidth={true}
              variant='outlined'
              onClick={handleClick}
            >
              View result
            </Button>
          </Container>
        </Stack>
      </Box>
  )
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const question = questions[id]
  const author = users[question.author]
  return {
    authedUser: authedUser.user_id,
    question: formatQuestion(question, author, authedUser),
  }
}

export default connect(mapStateToProps)(Question)