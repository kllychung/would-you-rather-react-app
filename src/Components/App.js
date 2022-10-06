import '../App.css';
import AnswerQuestion from './AnswerQuestion'
import CreateQuestion from './CreateQuestion'
import React, { Fragment, useEffect } from 'react';
import SignIn from './SignIn';
import { connect, useDispatch } from 'react-redux'
import { handleInitialData } from '../Actions/shared'
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading-bar'
import { Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './NavigationBar'
import { Container } from '@mui/system';
import QuestionResults from './QuestionResults';
import Leaderboard from './Leaderboard';
import PageNotFound from './PageNotFound';

const App = (props) => {

  const { loading, authedUser } = props
  const isNullUser = authedUser === null
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData(authedUser))
  })

  return (
    <Fragment>
      <LoadingBar />
      {loading ? '' : <NavigationBar />}
      <Container>
        <Routes>
          <Route exact path='/' element={isNullUser ? <Navigate to='/signIn' /> : <Dashboard />} />
          <Route path='new' element={isNullUser ? <Navigate to='/signIn' /> : <CreateQuestion />} />
          <Route path='signIn' element={<SignIn />} />
          <Route path='questions/:id' element={isNullUser ? <Navigate to='/signIn' /> : <AnswerQuestion />} />
          <Route path='questions/:id/result' element={isNullUser ? <Navigate to='/signIn' /> : <QuestionResults />} />
          <Route path='leaderboard' element={isNullUser ? <Navigate to='/signIn' /> : <Leaderboard />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Container>
    </Fragment>

  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(App);
