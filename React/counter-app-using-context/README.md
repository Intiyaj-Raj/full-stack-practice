# Counter App (React Context)

A simple counter application built with **React + Vite** using the **Context API** to manage shared state.

## What it does

- Shows the current counter value
- Provides buttons to:
  - Increment (+1)
  - Decrement (-1)
  - Increment by 5 (+5)

## How it works

### `CounterContext.jsx`

- Creates `CounterContext`
- Exposes `count` and `setCount` via a `CounterProvider`

### `main.jsx`

- Wraps the app with `<CounterProvider>` so any component can access the context.

### `App.jsx`

- Reads `count` from the context to display: `Counter is {count}`

### `Counter.jsx`

- Uses `setCount` from the context to update the shared counter value.

## Project structure

- `src/context/CounterContext.jsx` — Context + Provider
- `src/components/Counter.jsx` — Counter buttons
- `src/App.jsx` — Displays the count
- `src/main.jsx` — Provider wrapper

## Run the app

From the `counter-app-using-context` folder:

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (typically `http://localhost:5173`).
