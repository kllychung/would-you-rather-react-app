import React from 'react'
import { connect } from 'react-redux';
import QuestionResult from './QuestionResult';
import { useParams } from 'react-router-dom';
import { Avatar, Stack } from '@mui/material';
import { Container } from '@mui/system';
import { Navigate } from 'react-router-dom';

const QuestionResults = props => {
  const params = useParams();
  const qid = params.id
  const { questions, users, authedUser } = props

  const question = questions[qid];
  const isFoundQid = Object.keys(questions).includes(qid)

  const author = isFoundQid ? users[question.author] : {}
  const totalVotes = isFoundQid ? question.optionOne.votes.length + question.optionTwo.votes.length : 0

  return (
    !isFoundQid ? <Navigate to='/error' /> :
      <Container maxWidth="md" className='border'>
        <Container >
          <h3 >Asked by {author.name}</h3>
        </Container>
        <Avatar
          sx={{ width: 200, height: 200, mx: 'auto' }}
          src={author.avatarURL} />
        <Stack direction='column'>
          <h2>Results</h2>
          <QuestionResult
            option={question.optionOne}
            totalVotes={totalVotes}
            avatar={users[authedUser].avatarURL}
            voted={
              question.optionOne.votes.includes(authedUser)}
          />
          <QuestionResult
            option={question.optionTwo}
            totalVotes={totalVotes}
            avatar={users[authedUser].avatarURL}
            voted={question.optionTwo.votes.includes(authedUser)}
          />
        </Stack>
      </Container>
  );
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    questions: questions,
    users: users,
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(QuestionResults)