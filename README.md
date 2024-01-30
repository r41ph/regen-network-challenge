# Data Stream Full-stack Code Challenge

A project like the ones on https://app.regen.network/projects can have a “Data Stream” consisting of one or more “Data Posts”.

This challenge consists of displaying the list of Data Posts for a project, using React and TypeScript.

The goal here is for us to get a basic understanding of how you code, so it's not meant to be very difficult. Ideally you shouldn't spend more than a few hours on it.

## Front-end

Write a React application that displays, for a particular project, the project name and its data feed of entry posts as a reverse chronological list. There are no explicit requirements for which fields you should include in this data feed view. Feel free to go with whatever you think makes the most sense!

We recommend picking one of the [React-powered frameworks](https://react.dev/learn/start-a-new-react-project) popular in the community, though it's also fine if you have a different preferred way of bootstrapping a project.

Ideally your submission should involve a component-based approach, and have a responsive layout (optimising for both mobile and web views).

## Back-end

Under the `server/` folder, we provide an Express app with 2 endpoints:

- GET `/projects/:projectId`: get project data by `projectId`
- GET `/projects/:projectId/posts?limit=x&offset=y`: get the list of posts by `projectId`

The data is stored in a seeded PostgreSQL database with one project with UUID `b7823232-81a9-4cd8-a3fc-63dda206d63f` and a few posts for this project.
Please, see instructions in `server/README.md` for running that locally.

**Optional task**: add an endpoint to get a single post by UUID.

## What we're looking for

With this challenge we're trying to get a sense of how you would architect a basic front-end application. We're not looking for anything visually innovative, but do appreciate clean design. That being said, this is a coding challenge, not a design challenge - so code readability, and clean architecture are the main things we will be paying attention to.

## Submission

For submission, please send us an email with a link to your project, ideally as a github repo. Oh, and don't forget to add a nice README.md so we know how to build & run it :)
