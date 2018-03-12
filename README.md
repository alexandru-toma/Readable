# Readable Project

This is Alexandru Toma's project Readable done for Udacity's React Redux course.
The goal of this project is to show that the student has developed the necessary skills learned through 2nd stage of the course.

## Installation

### Client Installation

In order to install and launch the project, please do the following:

* install all project dependencies with `npm install`
* start the development server with `npm start`

### Server Installation

* Readable API server can be found at the following [link](https://github.com/udacity/reactnd-project-readable-starter).
* Inspect the README file to get more info about the installation of this specific part.

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── .gitignore # files and folders to be ignored by git
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── styles
    |   ├── App.css # Styles for your app. Feel free to customize this as you desire.
    │   └── index.css # Global styles. You probably won't need to change anything here.
    ├── actions
    |   ├── actionsTypes.js # Strings of action types.
    │   └── index.js # Action object.
    ├── api
    │   └── readableAPi.js # The readable API calls.
    └── components
        ├── comment
            ├── AddNewComment.js # Add a new comment form, state handled in component.
            ├── DisplayComment.js # Display a comment component.
            └── ListCommentsForPost.js # List all the comments in an unordonate list.
        ├── post
            ├── ListPost.js # List all the posts in an unordonate list.
            ├── ListPostDetail.js #List all the details of a post.
            ├── NewPost.js # Add a new post form, state handled in component.
            └── PostDetail.js # Post Detail view component.
    │   ├── App.js # Renders a book on the page, takes props 
    │   ├── CategoryView.js # Top of the dashboard page with categories display.
    │   └── NotFound.js # Error page for inexistent Route.
    ├── reducers
    │   └── index.js # Reducers pure functions.
    ├── App.js # Contains logic for calling API with functions and Routing of the page.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── icons # Helpful images for your app. Use at your discretion.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
     
```

## Important

* The backend Server API needs to be started so the Readable project can have access to its data.
* The backend API has a limited number of Categories (redux, udacity, react). To add more, the api-server project needs to be changed.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is an initial version of the Readable application, and represents a personal project. Therefore, I most likely will not accept pull requests.

## License 

This is part of Udacity React Nanodegree, so please refer to [Udacity Terms of Service](https://eu.udacity.com/legal) for further information.
