# Would you rather React App
Small web application that allows user to sign in and play “Would You Rather?”. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In this game, users can 

1. Create questions
2. See their unanswered questions 
3. Answer questions
4. View the votes of other players 
5. See the ranking of users on the leaderboard

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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
