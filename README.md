# Topic Chooser

This is a simple React project with Firebase designed for teachers to give out randomly selected topics for assignments or papers.

Don't expect a _whole_ lot... it was written in a weekend to help a friend who had to switch to remote teaching because of COVID-19. Under classroom circumstances, he would have the students choose a topic from a deck of cards. In the virtual classroom, this is to help instructors pre-define a set of topics and have students pick one at random (well, as randomly as JavaScript gets).

## It's Simplistic

The user interface is basic: a student logs in at the root level of the project using Google auth. Of course, this can be extended to use any authentication that Node.js supports. They are presented with a button to choose a topic from an array of pre-defined topics. If they've already chosen one, the system will remind them that they've already chosen **X** topic. If there are no topics left, the student is prompted to contact the instructor.

The interface for instructors is at `/admin` and consists of a grid of topics, student emails if they've claimed a topic, and the date they claimed one. There is a box to add more topics and buttons to delete topics. This could be augmented to have edit functionality.

## It Needs a Firebase Project

The project is designed for Firebase. Plug in credentials in _src/firebase.js_. In the Firebase project, enable Google Auth and user/password. The user/password will be for the instructor and is **not** their Google password.

## It's... Secure?

Since it uses Google auth, it should be relatively ok, but I make no guarantees. There's no real back-end auth or access control apart from the user/password created in the Firebase console. You can make this better, I'm sure.

## It's Free!

If you _really_ want to shoot me a dollar because this saved you time, send me a note. Otherwise, chalk this up to a contribution to virtual learning in the age of COVID.

## It... Might Have Issues

_Caveat emptor._

One issue is that deleting all the topics doesn't delete the last one from the interface, but does from the database, so a refresh is needed. It would be faster to fix it than write this, but meh. 

It's also older React, not using Hooks. 

## It's 120% Without Warranty.

Please, don't use this for something really _really_ important without giving it a solid review.

## It's Bootstraped with Create-React-App

Parts should look familiar.

### Made with love by Sonyl.


### CYA... MIT License

Copyright 2020 Sonyl Nagale

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
