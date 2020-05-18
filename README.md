# Would You Rather Project

This project was created as part of [Udacity's React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).

It is a single page application created with React and Redux to manage state. It allows users to create a question set to ask other users and poll for the results. User authentication and management is a mock implementation with user information created at application load time. Subsequent reloads of the site will require a new "login". The data is also created this way, so changes are not persisted between reloads (but are persisted while still within the application).

A deployed version of this application is available at [wyr.scgrk.com](http://wyr.scgrk.com).

## Run the application locally
To use the application locally, the only requirement is `npm`.
```sh
git clone https://github.com/scgerkin/reactnd-02-would-you-rather.git
cd reactnd-02-would-you-rather
npm install
npm start
```
The application will be served on `http://localhost:3000`.

## Project Rubric
The rubric is included in this project for quick reference, see [RUBRIC.md](./RUBRIC.md).

The original supplied by Udacity can be found [here](https://review.udacity.com/#!/rubrics/1567/view).

## Future expansion
I have plans to improve upon the overall styling of the application. I also plan to use this as a front end client for a serverless web application, implementing an actual persisted back end application using AWS Lambda and DynamoDB for the Cloud Developer Nanodegree capstone project. Check back for updates!   
