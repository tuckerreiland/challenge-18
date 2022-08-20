# Social Media API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
## Description

This is a node app that that uses MongoDB, Mongoose.js, and Express.js to create a simple social media API.

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [GitHub](#github)
* [License](#license)

## Installation
Install dependencies from package.json as follows: 

```
npm i
```

## Usage
Open the application file in the terminal and run:

```
node index.js
```
to start the server.  As this app doesn't have a front end, all functionality must be used through Insomnia or another API client.

Here is a list of all the provided for routes:

### GET
* Get All Users: http://localhost:3001/api/users/
* Get One User: http://localhost:3001/api/users/:userId
* Get All Thoughts: http://localhost:3001/api/thoughts/
* Get One Thought: http://localhost:3001/api/thoughts/:thoughtId

### POST
* Create User: http://localhost:3001/api/users/
* Add Friend: http://localhost:3001/api/users/:userId/friends/:friendId
* Create Thought: http://localhost:3001/api/thoughts/
* Add Reaction: http://localhost:3001/api/thoughts/:thoughtId/reactions

### PUT
* Update User: http://localhost:3001/api/users/:userId
* Update Thought: http://localhost:3001/api/thoughts/:thoughtId

### DELETE
* Delete User: http://localhost:3001/api/users/:userId
* Remove Friend: http://localhost:3001/api/users/:userId/friends/:friendId
* Delete Thought: http://localhost:3001/api/thoughts/:thoughtId
* Remove Reaction: http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId

## Github

* https://github.com/tuckerreiland/social-media-api

## Video

* https://drive.google.com/file/d/1d4WEWIdbU8kDWvCGTYLHcj-Haxnfa4Ac/view?usp=sharing

## License

MIT License