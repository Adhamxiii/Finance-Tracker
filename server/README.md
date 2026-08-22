# Finance Tracker — Backend

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Live Demo](#live-demo)
- [Contact Me](#contact-me)

## Overview

The Finance Tracker backend is a **Node.js** REST API built with **Express** and **TypeScript**. It connects to **MongoDB** via Mongoose and exposes endpoints for creating, reading, updating, and deleting financial records scoped by user ID.

This API powers the Finance Tracker frontend and is designed to store per-user financial data such as transactions, categories, and payment methods.

## Features

- **RESTful API** — CRUD operations for financial records
- **MongoDB integration** — Persistent storage with Mongoose schemas
- **User-scoped records** — Fetch all records for a specific user by Clerk user ID
- **CORS enabled** — Cross-origin requests supported for frontend integration
- **TypeScript** — Type-safe server code with Express and Mongoose
- **Environment-based config** — Port and database URI loaded from environment variables
- **Vercel-ready** — Includes `vercel.json` for serverless deployment

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/financial-records/getAllByUserID/:userId` | Get all records for a user |
| `POST` | `/financial-records` | Create a new financial record |
| `PUT` | `/financial-records/:id` | Update a record by ID |
| `DELETE` | `/financial-records/:id` | Delete a record by ID |

### Financial Record Schema

| Field | Type | Description |
|-------|------|-------------|
| `userId` | `string` | Clerk user ID (required) |
| `date` | `Date` | Record date (required) |
| `description` | `string` | Transaction description (required) |
| `amount` | `number` | Transaction amount (required) |
| `category` | `string` | e.g. food, rent, salary (required) |
| `paymentMethod` | `string` | e.g. cash, credit-card (required) |

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (included with Node.js)
- A [MongoDB](https://www.mongodb.com/) database (local or MongoDB Atlas)

### Steps

1. Clone the repository and navigate to the server directory:

   ```bash
   git clone <repository-url>
   cd Finance Tracker/server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=3001
   ```

   > **Note:** Never commit your `.env` file or expose database credentials in version control.

## Usage

### Development

Run the server with hot reload via nodemon:

```bash
npm run dev
```

The API will start on `http://localhost:3001` (or the port set in `PORT`).

### Production build

Compile TypeScript to JavaScript:

```bash
npm run build
```

### Start production server

```bash
npm start
```

### Example requests

**Create a record**

```bash
curl -X POST http://localhost:3001/financial-records \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user_123",
    "date": "2026-08-22T00:00:00.000Z",
    "description": "Groceries",
    "amount": 45.50,
    "category": "food",
    "paymentMethod": "credit-card"
  }'
```

**Get records by user ID**

```bash
curl http://localhost:3001/financial-records/getAllByUserID/user_123
```

**Update a record**

```bash
curl -X PUT http://localhost:3001/financial-records/<record_id> \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user_123",
    "date": "2026-08-22T00:00:00.000Z",
    "description": "Updated groceries",
    "amount": 50.00,
    "category": "food",
    "paymentMethod": "credit-card"
  }'
```

**Delete a record**

```bash
curl -X DELETE http://localhost:3001/financial-records/<record_id>
```

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test locally with `npm run dev`.
4. Ensure TypeScript compiles: `npm run build`
5. Commit your changes with a clear message.
6. Open a pull request describing your changes.

Please do not include secrets or `.env` files in pull requests.

## Live Demo

-[Here](https://finance-tracker-j8cm.onrender.com/)

## Contact Me

-   Email: [adhamxiii22](mailto:adhamxiii22@gmail.com)
-   LinkedIn: [Adham](https://www.linkedin.com/in/adhamnasser/)
-   GitHub: [Adhamxiii](https://github.com/Adhamxiii)
