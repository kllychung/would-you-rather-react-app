import { Button, Divider, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { handleAddQuestion } from '../Actions/questions';
import { Navigate } from 'react-router-dom';


const CreateQuestion = () => {
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setoptionTwoText] = useState('');
  const [toHome, setToHome] = useState(false);

  const dispatch = useDispatch()

  const handleOptionOneChange = (e) => {
    const text = e.target.value
    setOptionOneText(text)
  }

  const handleOptionTwoChange = (e) => {
    const text = e.target.value
    setoptionTwoText(text)
  }

  const clearInputBox = () => {
    setOptionOneText('')
    setoptionTwoText('')
  }

  const handleSubmit = (e) => {
    dispatch(handleAddQuestion(optionOneText, optionTwoText))
    clearInputBox()
    setToHome(true)
  }

  return (
    toHome ? <Navigate to='/' /> :
      <Container maxWidth="md" className='border'>
        <h3>Create New Question</h3>
        <Divider />
        <p style={{ textAlign: 'left' }}>Complete the question:</p>
        <h4 style={{ textAlign: 'left' }}>Would you rather ...</h4>
        <Divider />
        <TextField
          fullWidth
          label="Enter option one here ..."
          variant="outlined"
          onChange={handleOptionOneChange}
          value={optionOneText}
        />
        <Divider sx={{ py: 1 }}>OR</Divider>
        <TextField fullWidth
          label="Enter option two here ..."
          variant="outlined"
          onChange={handleOptionTwoChange}
          value={optionTwoText} />
        <Button
          type='submit'
          onClick={handleSubmit}
          sx={{ my: 2, height: 50 }}
          fullWidth={true} variant="contained"
          disabled={optionOneText === '' || optionTwoText === '' ? true : false}>Submit
        </Button>
      </Container>
  );
}

export default connect()(CreateQuestion);