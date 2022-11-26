# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Final Product
1. When a user submits a tweet, the form will submit a new POST request via AJAX using JQuery.
2. An error message will display at the top if no tweet content is present or the tweet is too long.
3. When the width of main page shrinks down to below 1024 px, the page switches layout to enhance readability. 

## Screenshots

Main page on screens below width of 1024px
!["Tweeter_small_layout"](https://github.com/sherimin/tweeterproject/blob/master/docs/Tweeter_small_layout.png?raw=true)

Main page on screens above width of 1024px and form toggle
!["Tweeter_large_layout"](https://github.com/sherimin/tweeterproject/blob/master/docs/tweeter_large_layout.jpeg?raw=true)

Error message when there is no tweet input
!["Error_empty"](https://github.com/sherimin/tweeterproject/blob/master/docs/Error_empty.png?raw=true)

Error message when tweet input is more than 140 characters
!["Error_toolong"](https://github.com/sherimin/tweeterproject/blob/master/docs/Error_toolong.png?raw=true)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
