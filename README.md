# Unbundl Frontend Developer Assessment

## Project Overview

This project is a React + Vite implementation of the provided Figma design. Three Figma sections were recreated with responsive layouts and populated with dynamic data using a public API. The application demonstrates component-based architecture, React Hooks, loading/error handling, and clean code organization.

---

## Tech Stack

* React
* Vite
* CSS3
* JavaScript (ES6+)

---

## API Used

**DummyJSON Products API**

https://dummyjson.com/products

The API data is fetched once using a custom hook and transformed before being passed to the required components as props.

---

## Project Structure

```
src/
│
├── components/
├── hooks/
│   └── useLandingData.js
├── services/
│   └── api.js
├── utils/
│   └── transformData.js
└── App.jsx
```

---

## Features

* Pixel-perfect implementation of 3 Figma sections
* Responsive design for Desktop, Tablet and Mobile
* Dynamic data using a public API
* React Hooks (useState, useEffect)
* Loading state
* Error handling
* Reusable component architecture
* Clean folder structure

---

## Installation

Clone the repository

```bash
git clone <YOUR_GITHUB_REPO_URL>
```

Go to the project folder

```bash
cd <PROJECT_NAME>
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

## Approach

I focused on recreating the Figma design as accurately as possible while keeping the components reusable and maintainable. Dynamic content is fetched from a single API source through a custom hook, transformed into the required UI structure, and passed to components via props to avoid redundant API calls and keep the application scalable.
