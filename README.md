Zendesk Internship Coding Challenge - 2019

Author: Anh Tran

SETUP:

Create .env at root folder with information as below:

RUNNING:

npm start

========================================================================================

Why do I choose this approach?

- The challenge to build a List of Ticket and Detail page of each ticket is a fundamental technique of List view and Detail view. With React, I can have the freedom to resue List view component based on different data response from Zendesk API. Also, one component to render the different ticket based on individual ticket data from Zendeck API.

- I want to spend more time on testing that why I decided to build the application on front end only and handle CORS problem by thirst party API, which is https://cors-anywhere.herokuapp.com/. By doing that, I have more time to work  about testing for front end.

- In this application, I used react-test-renderer for testing. However, I definitely will learn react-testing-library later to support my testing skill. As I learned from this challenge that the TDD approach will help my application become more stable.

- When calling API from Zendesk, I used endpoint "api/v2/tickets.json" with parameters page, per_page, and sort_by=created_at to help me paginate ticket and limit data inaccurate.

- The frontend application has two main pages: TicketList to list all tickets and TicketDetail to display individual ticket information