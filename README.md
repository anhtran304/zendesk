Zendesk Internship Coding Challenge - 2019

Author: Anh Tran

SETUP:

    Create .env at root folder with information as below:
    
    +++++++++++++++++++++++++++++++++
    
    REACT_APP_CORS=https://cors-anywhere.herokuapp.com/
    REACT_APP_PROXY=https://anhtran.zendesk.com/
    REACT_APP_USERNAME=tranmr@gmail.com
    REACT_APP_PASSWORD=qwerty
    REACT_APP_TICKETS_PER_PAGE=25
    
    +++++++++++++++++++++++++++++++++

RUNNING:

    npm start


TESTING:

    npm test

==================================================================================

Why do I choose this approach?

- The challenge is to build a List of Ticket and Detail page of each ticket, which is a fundamental technique of List view and Detail view. With React, I can have the freedom to resue List view component based on different data response from Zendesk API. Also, I just need one component to render the different ticket based on individual ticket data from Zendeck API.

- I want to spend more time on testing that why I decided to build the application on front end only and handle CORS problem by thirst party API, which is https://cors-anywhere.herokuapp.com/. By doing that, I have more time to work on testing for front end.

- In this application, I used react-test-renderer for testing. However, if I have more time I definitely will use react-testing-library for testing and Cypress for end-to-end testing. As I learned from this challenge that the TDD approach will help my application become more stable before I can ship them to QA

- When calling API from Zendesk, I used endpoint "api/v2/tickets.json" with parameters page, per_page, and sort_by=created_at to help me paginate ticket and limit data inaccurate.

- The frontend application has two main pages: TicketList to list all tickets and TicketDetail to display individual ticket information
