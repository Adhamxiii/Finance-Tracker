# Finance Tracker — Frontend

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Live Demo](#live-demo)
- [Contact Me](#contact-me)

## Overview

Finance Tracker is a personal finance management web application built with **React**, **TypeScript**, and **Vite**. The frontend provides a dashboard where authenticated users can track income and expenses, view monthly totals, and manage financial records through an intuitive interface.

Authentication is handled by **Clerk**, and the app communicates with the Finance Tracker REST API to persist data per user.

## Features

- **User authentication** — Sign up and sign in via Clerk with modal-based auth flows
- **Personal dashboard** — Personalized welcome view for each signed-in user
- **Add financial records** — Create entries with description, amount, category, and payment method
- **Editable records table** — Inline editing of description, amount, category, and payment method using `react-table`
- **Delete records** — Remove individual financial entries from the table
- **Monthly total** — Real-time calculation of total amount across all records
- **Category support** — Food, Rent, Salary, Utilities, Entertainment, and Other
- **Payment methods** — Cash, Credit Card, and Bank Transfer
- **Responsive routing** — React Router with dedicated `/` dashboard and `/auth` routes
- **Dark-themed UI** — Clerk user button styled with a dark theme

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (included with Node.js)
- A [Clerk](https://clerk.com/) account and publishable key
- The Finance Tracker backend running locally or deployed (see the [server README](../server/README.md))

### Steps

1. Clone the repository and navigate to the client directory:

   ```bash
   git clone <repository-url>
   cd Finance Tracker/client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the `client` directory:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. Ensure the backend API URL in `src/contexts/financialRecordContext.tsx` matches your server (default: `http://localhost:3001`).

## Usage

### Development

Start the Vite development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build

Create a production build:

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Application flow

1. Open the app and go to `/auth` to sign up or sign in.
2. After authentication, you are redirected to the dashboard at `/`.
3. Use the form to add a new financial record.
4. View, edit inline, or delete records in the table below.
5. Check the **Total Monthly** summary at the top of the dashboard.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test locally with `npm run dev`.
4. Run the linter: `npm run lint`
5. Commit your changes with a clear message.
6. Open a pull request describing your changes.

Please keep changes focused and follow the existing code style and project structure.

## Live Demo

-[Here](https://finance-tracker-7g9s.vercel.app/)

## Contact Me

-   Email: [adhamxiii22](mailto:adhamxiii22@gmail.com)
-   LinkedIn: [Adham](https://www.linkedin.com/in/adhamnasser/)
-   GitHub: [Adhamxiii](https://github.com/Adhamxiii)
