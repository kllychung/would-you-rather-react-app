import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { Button, FormControlLabel, RadioGroup, FormControl, Radio, Avatar, Stack, Divider } from '@mui/material';
import { Container } from "@mui/system";
import { handleSaveQuestionAnswer } from "../Actions/shared";
import { Navigate } from 'react-router-dom';
import QuestionResults from "./QuestionResults";

const AnswerQuestion = props => {

  const params = useParams();
  const dispatch = useDispatch()
  let [value, setValue] = useState('')
  const qid = params.id
  const { questions, users, authedUser } = props
  const question = questions[qid];

  const isFoundQid = Object.keys(questions).includes(qid)
  let isPollAnswered = false;

  const user = isFoundQid ? users[question.author] : {}
  if (question?.optionOne.votes.includes(authedUser)) {
    value = 'optionOne'
  }
  else if (question?.optionTwo.votes.includes(authedUser)) {
    value = 'optionTwo'
  }
  isPollAnswered = question?.optionOne.votes.includes(authedUser) || question?.optionTwo.votes.includes(authedUser)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = () => {
    if (!isPollAnswered) dispatch(handleSaveQuestionAnswer(
      qid, value))
  }

  const buttonText = isPollAnswered ? 'View Poll Result' : 'Submit Answer'

  return (
    !isFoundQid ? <Navigate to='/error' /> :
      isPollAnswered ? <QuestionResults /> :
        <Container maxWidth="sm">
          <Stack direction="column" sx={{ border: 2, borderColor: '#cfe8fc', borderRadius: 2, px: 0, py: 0 }}>
            <h4 style={{ padding: 2, marginLeft: 10 }}>{user.name} says</h4>
            <Divider variant="fullWidth" sx={{ color: '#cfe8fc' }} />
            <Stack direction="row" sx={{ m: 1 }} >
              <Avatar
                sx={{ width: 200, height: 200, mx: 1 }}
                src={user.avatarURL}
              />
              <div>
                <Container>
                  <h2 style={{ textAlign: "left", color: '#4287f5', marginTop: 0 }} >Would you rather</h2>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={value}
                      name="radio-buttons-group"
                      sx={{ mx: 'auto' }}
                      onChange={handleChange}
                    >
                      <FormControlLabel value='optionOne' control={<Radio />} label={question.optionOne.text} />
                      <FormControlLabel value='optionTwo' control={<Radio />} label={question.optionTwo.text} />
                    </RadioGroup>
                  </FormControl>
                  <Button
                    type='submit'
                    fullWidth={true}
                    onClick={handleSubmit}
                    disabled={value === '' ? true : false}
                    sx={{ mx: 'auto', height: 40, my: 1 }}
                    variant="contained">{buttonText}
                  </Button>

                </Container>
              </div>
            </Stack>
          </Stack>
        </Container>
  )
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions: questions,
    users: users,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(AnswerQuestion)