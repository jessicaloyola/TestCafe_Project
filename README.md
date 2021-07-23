# TestCafe_Project

INDEX

A. Test suites
B. Dependencies
C. Aditional config

A. 3 Test suites implemented

1. Log in tests
2. Task tests
3. Smoke tests

1. Log in test suite consist on 4 tests:
    1.1 Log in successfully (1 Positive case)- As a user I should be able to not log in by providing invalid credentials
    1.2 Log in not succesfully (3 Negatives cases)
        1.2.1 As a user I should be able to not log in by providing invalid credentials 
        1.2.2 As a user I should be able to not log in by providing no user
        1.2.3 As a user, I should not be able to log in when a password is not provided 

To test log in cases the following command shall be executed: npm run test-login 

2. Task test suite consist on 5 tests
    2.1 As a user I should be able to create a new task with today as the due date and validate it was created correctly
    2.2 As a user I should be able to create a new task with tomorrow as the due date and validate it was created correctly
    2.3 As a user I should be able to create 10 tasks with today as the due date and validate it was created correctly
    2.4 As a user I should be able to create a new project with a color and add it to my favorites
    2.5 As a user I should be able to delete every task created

To test task cases the following command shall be executed: npm run test-task 

3. Smoke test suite consist on 4 tests:

    3.1 As a user I should be able to create a new task with today as the due date and validate it was created correctly
    3.2 As a user I should be able to create a new project with a color and add it to my favorites
    3.3 As a user I should be able to delete every task created
    3.4 As a user I should be able to not log in by providing invalid credentials

To test smoke tests cases the following command shall be executed: npm run test-smoke 

B. Dependencies

Dependecies implemented in this project are:
1. Slack as visual reporter
2. Eslint as static analysis tool 
3. Continuos Integration tool Jenkins
4. Github Source Code repository


C. Aditional configuration

1. Assertion timeout configurated in 4000
2. Browsers supported:
    a. Chrome
    b. Firefox







