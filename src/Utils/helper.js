export function formatQuestion (question, author, authedUser) {
    const { id, optionOne, optionTwo, timestamp } = question
    const { name, avatarURL } = author
    
    return {
      name,
      id,
      timestamp,
      optionOneText: optionOne.text,
      optionTwoText: optionTwo.text,
      avatar: avatarURL,
    }
  }