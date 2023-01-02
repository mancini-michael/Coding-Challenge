# Coding Challenge

The aim of this coding challenge is to create a registration page for new users.

# Table of Contents

- [Coding Challenge](#coding-challenge)
- [Table of Contents](#table-of-contents)
- [Installation and Usage](#installation-and-usage)
- [Description](#description)

# Installation and Usage

Prerequisites: [Node.js](https://nodejs.org/en/) (`18.12.1` or `19.3.0`).

You can install all dependencies, create build files and start application using these commands:

```shell
$ npm install && npm run build && npm run preview
```

Or additionaly, if you use yarn:

```shell
$ yarn && yarn build && yarn preview
```

Click [here](http://localhost:4173/registration) to visit registration page and play with registration form.

# Description

The project is generated with [vite](https://vitejs.dev/) using [typescript](https://www.typescriptlang.org/) and [bootstrap](https://getbootstrap.com/) to style frontend.

Registration form requires the following information:

- username
- email
- password
- confirm password
- terms and conditions

Also, registration form checks validity of current inputs. If inputs do not satisfy conditions, the form shows up error message under relative input field.

Conditions of validity:

- the username must have at least three characters
- the email must be valid according to [standard specifications](https://en.wikipedia.org/wiki/Email_address#Validation_and_verification)
- the password must have at least eight characters, one lower case letter, one upper case letter and one number
- the confirm password must match the password

On submit, the application simulates the interaction with backend and print user data.
