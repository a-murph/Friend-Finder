# Friend-Finder

Friend Finder is a simple Express.js webapp that matches your personality with other people's, based on a short survey.

## How to Use

Click the button on the front page to be taken to the survey. Once there, enter a name and an image URL, fill out the survey questions, and hit submit.

Your answers will be compared against every other user's answers to find the best match. Once a match has been found, the name and photo of your match will be displayed to you.

## How it Works

When a user clicks the "submit survey" button, a `POST` request is sent to the profile API at `/api/friends`. Once the server recieves the `POST` request, it compares the user's survey scoreset to that of every other user that has entered information so far, and determines which other user is the closest match.

Once the closest match is found, the new profile is added to the profiles dataset and the matching profile is returned to the client as a JSON object, which the client uses to display the profile information to the user.

Sending a `GET` request to the profile API at `/api/friends` will return a JSON array containing all of the profile objects currently in the dataset. This array is stored on the server in a simple JavaScript file.

## Tools Used

The server is running JavaScript through [Node.js](https://nodejs.org/en/), using the [Express.js](https://expressjs.com/) framework.

The [body-parser](https://www.npmjs.com/package/body-parser) NPM module is used for getting data out of `POST` requests from the client.

[Bootstrap](https://getbootstrap.com/) is used for all CSS styling, as well as for creating the modal window for showing your best-matched profile.