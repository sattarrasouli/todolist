# Todo App

## Overview

This Todo app allows users to manage their tasks efficiently. Users can add new tasks, mark them as completed, update task details, and delete tasks. The app is built using modern web technologies and follows a client-server architecture.

## Technologies Used

- **React**: A JavaScript library for building user interfaces. The app's front end is developed using React to create a responsive and interactive user interface.

- **Zustand**: A simple and lightweight state management library for React. Zustand is used to manage the state of the Todo app, making it easy to handle data and state changes.

- **Sass**: Cascading Style Sheets are used for styling the app, providing a clean and visually appealing design.

## API

The Todo app interacts with a RESTful API to perform CRUD (Create, Read, Update, Delete) operations on tasks. The API is hosted at [https://dummyjson.com/todos](https://dummyjson.com/todos) and provides endpoints for managing tasks.

- **GET /todos**: Fetches the list of tasks.
- **POST /todos/add**: Adds a new task.
- **PUT /todos/{id}**: Updates the details of a task.
- **DELETE /todos/{id}**: Deletes a task.

## Setup

 Clone the repository:

   ```bash
   git clone https://github.com/sattarrasouli/todolist.git


Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
