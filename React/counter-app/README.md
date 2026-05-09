# Counter App

A polished **React + Vite** counter application featuring manual controls, auto-count, and a Light/Dark mode toggle.

## ✅ Key Features

- **Increase (+1)**
- **Decrease (-1)**
  - Shows an alert if you try to go below **0**
- **Reset**
  - Resets the counter back to **0**
- **Light / Dark Mode**
  - Updates page background and text color
- **Auto Count**
  - Start/Stop an interval that increases the counter every **1 second**

## 🧰 Tech Stack

- **React**
- **Vite**

## 🚀 Getting Started

From the `counter-app` folder:

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## 🛠 Build for Production

```bash
npm run build
```

## 📁 Project Overview

- `src/App.jsx`
  - Holds the counter state and business logic (increase/decrease/reset + mode)
- `src/assets/components/Counter.jsx`
  - Counter UI + **Auto Count** implementation
- `src/App.css`
  - Styling for the app

## License

MIT
