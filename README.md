# TestCafe_Project 
## QA Bootcamp 
#### Jessica Loyola

## INDEX

1. Test suites
2. Dependencies
3. Aditional config


1. 4 Test suites implemented

    - Log in test suite, consist on 4 tests:
        - Log in successfully (1 Positive case)- As a user I should be able to not log in by providing invalid credentials
        - Log in not succesfully (3 Negatives cases)
            - As a user I should be able to not log in by providing invalid credentials 
            - As a user I should be able to not log in by providing no user
            - As a user, I should not be able to log in when a password is not provided 
        To test log in cases the following command shall be executed: npm run test-login
        Test is implementend in headless mode with both chrome and firefox browsers

    - Task test suite consist on 5 tests
        - As a user I should be able to create a new task with today as the due date and validate it was created correctly
        - As a user I should be able to create a new task with tomorrow as the due date and validate it was created correctly
        - As a user I should be able to create 10 tasks with today as the due date and validate it was created correctly
        - As a user I should be able to create a new project with a color and add it to my favorites
        - As a user I should be able to delete every task created
    To test task cases the following command shall be executed: npm run test-task 

    - Smoke test suite consist on 4 tests:
        - As a user I should be able to create a new task with today as the due date and validate it was created correctly
        - As a user I should be able to create a new project with a color and add it to my favorites
        - As a user I should be able to delete every task created
        - As a user I should be able to not log in by providing invalid credentials
    To test smoke tests cases the following command shall be executed: npm run test-smoke 
    Or headless option shall be npm run test-smoke-headless

    - To test all test suite the following command shall be executed: npm run test-headless
    Test will be presented headless

2. Dependencies

Dependecies implemented in this project are:
- XUnit as visual reporter
- Eslint as static analysis tool 
- Continuos Integration tool Jenkins
- Github Source Code repository


3. Aditional configuration

- Assertion timeout configurated in 4000
- Browsers supported:
    - Chrome
    - Firefox







