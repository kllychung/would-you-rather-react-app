import React from "react";
import { connect } from "react-redux";
import UserStatistics from "./UserStatistics";

const Leaderboard = (props) => {
  const { userStats } = props

  return (
    userStats.map((user) =>
      <UserStatistics key={user.id} user={user} />
    ));
}

function mapStateToProps({ users }) {
  return {
    userStats: Object.values(users).map(user => {
      return {
        name: user.name,
        id: user.id,
        answers: Object.keys(user.answers).length,
        questions: user.questions.length,
        avatar: user.avatarURL
      }
    }).sort((a, b) => (b.questions + b.answers) - (a.questions + a.answers))

  }
}

export default connect(mapStateToProps)(Leaderboard)