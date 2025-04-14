# TODO List Application

A simple TODO list application built using the **PERN stack** (PostgreSQL, Express, React, Node.js).

This app allows users to:
- Add tasks
- Edit tasks
- Delete tasks

Tasks are stored in a **PostgreSQL** database, and the interface is built with **React**.

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **PostgreSQL** (running locally or remotely)

---

## Installation

Follow the steps below to set up the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/hodayaShirazie/TODO-list.git
cd TODO-list
```

---

### 2. Backend Setup (Node.js + Express)

2.1 Navigate to the backend directory and install dependencies:

```bash
cd server
npm install
```

2.2 Ensure PostgreSQL is running and create the database and table:

```sql
CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description TEXT NOT NULL
);
```

2.3 In the `server` directory, create a `.env` file and add:

```env
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=todo
```

2.4 Run the backend server:

```bash
npm start
```

---

### 3. Frontend Setup (React)

3.1 Navigate to the frontend directory and install dependencies:

```bash
cd ../client
npm install
```

3.2 Run the frontend development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

---

## Usage

Once both backend and frontend are running:

- **Add Task**: Enter a description and click "Add Task"
- **Edit Task**: Click "Edit" next to a task to update it
- **Delete Task**: Click "Delete" next to a task to remove it
