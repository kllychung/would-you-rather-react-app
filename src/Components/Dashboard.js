import { FormGroup, Container, Stack, FormControlLabel, Switch, Box } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

import Question from "./Question";
import { useState } from "react";

const Dashboard = (props) => {
  const { unansweredQuestionIds, answeredQuestionIds } = props
  const [showAnswerQuestions, setShowAnsweredQuestions] = useState(false)
  const handleChange = (event) => {
    setShowAnsweredQuestions(event.target.checked)
  }
  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={<Switch />}
          label="Show answered questions"
          onChange={handleChange}
        />
      </FormGroup>
      <Stack direction="row" justifyContent="space-evenly" >
        <Container>
          <h2>Unanswered Questions</h2>
          {unansweredQuestionIds.map((questionId) =>
            <ul key={questionId}>
              <Question id={questionId} answered={false} />
            </ul>
          )}
        </Container>
        {showAnswerQuestions && (
          <Container>
            <h2>Answered Questions</h2>
            {answeredQuestionIds.map((questionId) =>
              <ul key={questionId}>
                <Question id={questionId} answered={true} />
              </ul>
            )}
          </Container>)}
      </Stack>
    </Box>

  )
}

function mapStateToProps({ questions, authedUser }) {
  return {
    unansweredQuestionIds: Object.keys(questions)
      .filter((id) => !questions[id].optionOne.votes.concat(questions[id].optionTwo.votes).includes(authedUser))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestionIds: Object.keys(questions)
      .filter((id) => questions[id].optionOne.votes.concat(questions[id].optionTwo.votes).includes(authedUser))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)