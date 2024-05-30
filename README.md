
   # Social Netwok API
   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

   ## Description
   
   This app is the API for a social network that allows one to create, view, edit, and delete users, add and delete friends for each user, create, view, edit, and delete thoughts (or what a user would post on social media), and create and delete reactions (or comments to said thought).
   
   ## Table of Contents 
   
   1. [Installation](#installation)
   2. [Usage](#usage)
   3. [License](#license)
   4. [Questions](#questions)
   
   ## Installation
   
   After cloning the repo, install the node modules. You will also need to use postman (or some other application that functions the same way).
   
   ## Usage
   
   Initiate the app with "node index.js" (nodemon is also acceptable in replacement of node). Open up postman with the port location given in the terminal. 
   
   With the extension of "user" you can POST (create) and GET (view). If you add the user id number to the extension you can GET (view), PUT (edit), and DELETE. Adding to that extension "friends/" and then the user id of the user targeted for friendship you can POST (add friend) and DELETE (remove friend).

   With the extension of "thoughts" you can POST (create) and GET (view). If you add the thought id number to the extension you can GET (view), PUT (edit), and DELETE. Adding "reactions" after the thought id number of the extension you can POST (create reaction). And finally adding to that extension the reaction id number you can DELETE the reaction.

   <iframe src="https://drive.google.com/file/d/1xFn2jXAlXhbhA432HpVqRZ-D-DeLueGQ/preview" width="640" height="480"></iframe>
   
   ## License
   
   MIT

   ## Questions

   For any additional questions, please contact me:
   github.com/GwiyomiAmy
   
   