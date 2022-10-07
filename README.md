# Would you rather 
Small web application made with react and redux that allows users to play “Would You Rather?”. 

## App Description
The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In this game, users can 

1. Users can sign in
2. Create questions
3. See their unanswered questions 
4. Answer questions
5. View the votes of other players 
6. See the ranking of users on the leaderboard

## Available Scripts

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`
- test the app with `npm test`

## Project Directory

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── Actions
    │   ├── authUser.js
    │   ├── questions.js
    │   ├── shared.js
    │   └── users.js
    ├── App.css
    ├── App.test.js
    ├── Components
    │   ├── AnswerQuestion.js
    │   ├── App.js
    │   ├── CreateQuestion.js
    │   ├── Dashboard.js
    │   ├── Leaderboard.js
    │   ├── NavigationBar.js
    │   ├── PageNotFound.js
    │   ├── Question.js
    │   ├── QuestionResult.js
    │   ├── QuestionResults.js
    │   ├── SignIn.js
    │   └── UserStatistics.js
    ├── Middleware
    │   ├── index.js
    │   └── logger.js
    ├── Reducers
    │   ├── authedUser.js
    │   ├── index.js
    │   ├── questions.js
    │   └── users.js
    ├── Utils
    │   ├── _DATA.js
    │   ├── api.js
    │   └── helper.js
    ├── front_logo.png
    ├── index.css
    ├── index.js
    └── setupTests.js
```
