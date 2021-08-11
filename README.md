# TestCafe_Project 
## QA Bootcamp 
#### Jessica Loyola

## PROJECT STRUCTURE

```
testcafe_project
    |__ POM
        |__ data
            |   |__Constants.js
            |   |__Roles.js
        |__ pages
            |   |__BasePage.js
            |   |__HomePage.js
            |   |__LoginPage.js
            |   |__ProjectPage.js
            |   |__TodayPage.js
        |__ tests
            |   |__Login.test.js
            |   |__Project.test.js
            |   |__Task.test.js
```


## INDEX

1. Installation
2. Test suites
3. Adittional Dependencies
4. Aditional config

## CONTENT

1. Installation

    - Clone project from repository `https://github.com/jessicaloyola/TestCafe_Project.git`
    - Install dependencies `npm install`
    - Environment variables to be created in a .env file

```
HOME_URL=https://todoist.com
LOGIN_URL=https://todoist.com/users/showlogin
STANDARD_USER=
STANDARD_USER_PASSWORD=
```

2. Five Test suites implemented

    - Log in test suite, consist on 4 tests:
        - Log in successfully (1 Positive case)- As a user I should be able to not log in by providing invalid credentials
        - Log in not succesfully (3 Negatives cases)
            - As a user I should be able to not log in by providing invalid credentials 
            - As a user I should be able to not log in by providing no user
            - As a user, I should not be able to log in when a password is not provided 
        
        > To test log in cases the following command shall be executed: `npm run test-login`

        > Test is implementend in headless mode with both chrome and firefox browsers

    - Task test suite consist on 5 tests
        - As a user I should be able to create a new task with today as the due date and validate it was created correctly
        - As a user I should be able to create a new task with tomorrow as the due date and validate it was created correctly
        - As a user I should be able to create 10 tasks with today as the due date and validate it was created correctly
        - As a user I should be able to create a new project with a color and add it to my favorites
        - As a user I should be able to delete every task created
        
        >To test task cases the following command shall be executed: `npm run test-task` 

    - Project test suite consist on 5 tests
        - As a user I should be able to create a new project with a color and add it to my favorites
        
        >To test task cases the following command shall be executed: `npm run test-project` 

    - Smoke test suite consist on 4 tests:
        - As a user I should be able to create a new task with today as the due date and validate it was created correctly
        - As a user I should be able to create a new project with a color and add it to my favorites
        - As a user I should be able to delete every task created
        - As a user I should be able to not log in by providing invalid credentials

        > To test smoke tests cases the following command shall be executed: `npm run test-smoke`

        > Or headless option shall be npm run test-smoke-headless

    - To test all test suite the following command shall be executed: `npm run test-headless`
    Test will be presented headless

3. Adittional dependencies

Dependecies implemented in this project are:
- XUnit as visual reporter
- Eslint as static analysis tool 
- Continuos Integration tool Jenkins
- Github Source Code repository


4. Aditional configuration

- Assertion timeout configurated in 4000
- Browsers supported:
    - Chrome
    - Firefox







