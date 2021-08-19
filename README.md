# Node-Express-MongoDB-with-Mongoose
This is a Node, Express, MongoDB, and Mongoose demo application with various features used in everyday web development, with a fine touch of best practices. The demo app is a simple user CRUD application where users can be added, get all users, edit, update and delete a user.

## Features
- nodejs
- mongodb
- mongoose
- restfull Api's
- generic functions
- routes
- controllers
- models
- helpers
- used best practices

## Requirements

- [node & npm](https://nodejs.org/en/)
- [git](https://www.robinwieruch.de/git-essential-commands/)
- [mongodb](https://www.mongodb.com/)

## Installation

- `git clone https://github.com/walayatkhan/Node-Express-MongoDB-with-Mongoose`
- `cd Node-Express-MongoDB-with-Mongoose`
- `npm install`
- replace the mongodb url in services/db-connections.js
- `npm start` or `node ./src/server.js`
- optional: include _.env_ in your _.gitignore_

### Well Structured Routes

- visit http://localhost:3333
  - /users          type get  ( getAll )      
  - /users/:id      type get  ( getOne )
  - /add            type post ( addOne )
  - /update/:id     type put   ( updateOne )
  - /users/:id      type delete( deleteOne )

## Project structure

```sh
.
├──src
│  ├── server.js
│  ├── app.js
│  
│  ├── configuration
│  │   └── config.js
│  ├── constants
│  ├── helpers
│  │   ├── email_helper.js
│  ├── models
│  │   ├── index.js
│  │   └── user_model.js
│      └── setting_model.js
│  ├── mongoose
│  │   ├── queries
│          ├── query.js
│  │   ├── base-query.js
│  │   └── index.js
│  │   └── Users.js
│  │   └── Settings.js
│  ├── services
│  │   ├── db_connection.js
│  │   └── index.js
│  
│  ├── modules
│  │   ├── Settings
│  │   │   └── business.js
│  │   │   └── controller.js
│  │   │   └── routes.js  
│  │   ├── Users
│  │   │   └── business.js
│  │   │   └── controller.js
│  │   │   └── routes.js 
│ 
├── .env
├── package.json
├── yarn.lock
├── yarn-error.log
├── .gitignore
```
