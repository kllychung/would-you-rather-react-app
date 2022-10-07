import { Box, Chip, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { Avatar } from '@mui/material';

const QuestionResult = props => {

  const { option, totalVotes, voted, avatar } = props
  const questionVotes = option.votes.length
  const percentage = totalVotes > 0 ? (questionVotes * 100 / totalVotes) : 0

  return (
    <Box sx={{ p: 1, bgcolor: '#eeeeee', mb: 3 }}>

      <h4 style={{ float: 'left' }}>{option.text}</h4>
      {
        voted && <Chip sx={{ float: 'right' }}
          size="medium"
          avatar={<Avatar src={avatar} />}
          label="You voted"
          color="warning"
        />
      }
      <Box>

        <Box sx={{ mr: 1 }}>
          <LinearProgress sx={{ width: '100%', height: 25 }} variant="determinate" value={percentage} />
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            percentage,
          )}%`}</Typography>
        </Box>
      </Box>
      <h4>{questionVotes} out of {totalVotes} votes</h4>
    </Box>


  );
}

export default QuestionResult