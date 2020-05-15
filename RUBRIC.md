# Would You Rather? Project Specification
This is the project rubric for Udacity's React Nanodegree, Project 2, "Would You Rather." The original can be found [here](https://review.udacity.com/#!/rubrics/1567/view) but has been included with the project for reference.

Each subsection includes the criteria for that portion (parent list item) of the application and the requirements to meet the specification (child list item(s)).

## Application Setup
- Is the application easy to install and start?
    - The application requires only `npm install` and `npm start` to install and launch.

- Does the application include README with clear installation and launch instructions?
    - A README is included with the project. The README includes a description and clear instructions for installing and launching the project.

## Login Flow
- Does the application have a way to log in and log out?

- Does the application work correctly regardless of which person the user impersonates?
    1. There should be a way for the user to impersonate/ log in as an existing user. (This could be as simple as having a login box that appears at the root of the application. The user could then select a name from the list of existing users.)
    1. The application works correctly regardless of which user is selected.
    1. The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.
    1. Once the user logs in, the home page is shown.
    1. Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.

## Application Functionality
- Does the home page have the desired functionality?
    1. The answered and unanswered polls are both available at the root.
    1. The user can alternate between viewing answered and unanswered polls.
    1. The unanswered questions are shown by default.
    1. The name of the logged in user is visible on the page.
    1. The user can navigate to the leaderboard.
    1. The user can navigate to the form that allows the user to create a new poll.

- Are the polling questions listed in the correct category (Unanswered vs Answered), and do they have the desired functionality on the home page?
    - Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.
    - A polling question links to details of that poll.
    - The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

- Are the details of each poll displayed with all of the relevant information?
    1. The details of the poll are available at `questions/:question_id`.
    1. When a poll is clicked on the home page, the following is shown:
        - The text “Would You Rather”
        - The picture of the user who posted the polling question
        - The two options
    1. For answered polls, each of the two options contains the following:
    the text of the option;
    the number of people who voted for that option;
    the percentage of people who voted for that option.
    1. The option selected by the logged in user should be clearly marked.
    1. When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
    1. The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.)

- Does the voting mechanism work correctly?
    1. Upon voting in a poll, all of the information of the answered poll is displayed.
    1. The user’s response is recorded and is clearly visible on the poll details page.
    1. When the user comes back to the home page, the polling question appears in the “Answered” column.
    1. The voting mechanism works correctly, and the data on the leaderboard changes appropriately.

- Can users add new polls?
    1. The form is available at `/add`.
    1. The application shows the text “Would You Rather” and has a form for creating two options.
    1. Upon submitting the form, a new poll is created and the user is taken to the home page.
    1. The new polling question appears in the correct category on the home page.

- Does the leaderboard work correctly and have the desired functionality?
    1. The Leaderboard is available at `/leaderboard`.
    1. Each entry on the leaderboard contains the following:
        - The user’s name
        - The user’s picture
        - The number of questions the user asked
        - The number of questions the user answered.
    1. Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.

- Is the application navigable?
    - The app contains a navigation bar that is visible on all of the pages.
    - The user can navigate between the page for creating new polls, and the leaderboard page, and the home page without typing the address into the address bar.

- Does the application interact with the backend correctly?
    - The data that’s initially displayed is populated correctly from the backend.
    - Each user’s answer and each new poll is correctly recorded on the backend.

- Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation, such as using `key` for list items? Is the code formatted properly?
    - The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.

## Architecture
- Does the store serve as the application’s single source of truth?
    - The store is the application’s source of truth.
    - Components read the necessary state from the store; they do not have their own versions of the same state.
    - There are no direct API calls in the components' lifecycle methods.

- Is application state managed by Redux?
    - Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.
    - Form inputs and controlled components may have some state handled by the component.

- Does application state update correctly?
    - Updates are triggered by dispatching action creators to reducers.
    - Reducers and actions are written properly and correctly return updated state to the store.

- Does the architecture of the application make sense?
    - The code is structured and organized in a logical way.
    - Components are modular and reusable.

## Suggestions to Make Your Project Stand Out!
- Add the functionality for creating new users.
- Add authentication.
- Add a loading bar.
