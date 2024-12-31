# Course Selling Website Backend

This repository contains the backend for a basic course selling website. It is built using **Node.js**, **Express**, and **MongoDB**, with user authentication and authorization implemented using **JWT (JSON Web Tokens)**. The project includes middleware for managing user and admin permissions.

## Features

- **User Authentication**: Users can register, log in, and access protected routes.
- **Admin Authorization**: Admins have elevated permissions to manage courses.
- **Course Management**: Backend APIs for adding, updating, and fetching course information.
- **Middleware**: Includes middleware for user and admin roles.
- **Database**: MongoDB for storing user and course data.

## Folder Structure

```
.
├── middleware
│   ├── userMiddleware.js   # Middleware for user authentication
│   └── adminMiddleware.js  # Middleware for admin authorization
├── routes
│   ├── admin.js            # Routes for admin operations
│   ├── user.js             # Routes for user operations
│   ├── course.js           # Routes for course operations
├── db.js                   # Database schema and models
├── .env.example            # Example environment variables file
├── package.json            # Project dependencies and scripts
├── index.js                # Main application entry point
└── README.md               # Project documentation
```

## Middleware

### `userMiddleware`
- Ensures the user is authenticated before accessing certain routes.

### `adminMiddleware`
- Verifies if the authenticated user has admin privileges.

## Dependencies

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **jsonwebtoken**
- **dotenv**
